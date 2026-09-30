"use client";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { useCart } from "@/src/hooks/useCart";
import {
  paymentFail,
  registerOrder,
  verifyPayment,
} from "@/src/services/order.service";
import type { RegisterOrderPayload } from "@/src/types/order";
import { loadRazorpay } from "@/src/utils/loadRazorpay";

import { AssistanceSection } from "./components/AssistanceSection";
import { BillingDetails } from "./components/BillingDetails";
import { CouponSection } from "./components/CouponSection";
import { OrderSummary } from "./components/OrderSummary";
import { useRouter } from "next/navigation";

export default function CheckoutClient() {
  const [couponOpen, setCouponOpen] = useState(false);
  const [removedItemName, setRemovedItemName] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const {
    cart,
    loading,
    error,
    couponError,
    updating,
    updateCart,
    removeItem,
    undoRemoveItem,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const router = useRouter();

  const toggleCoupon = useCallback(() => {
    setCouponOpen((prev) => !prev);
  }, []);

  const handlePaymentFailure = useCallback(async (razorpayOrderId: string) => {
    try {
      await paymentFail(razorpayOrderId);
    } catch (error) {
      console.error("Payment fail API error:", error);
    } finally {
      setPaymentProcessing(false);
    }
  }, []);

  const handleOrder = useCallback(
    async (formData: RegisterOrderPayload) => {
      try {
        setPaymentProcessing(true);

        const registerResponse = await registerOrder(formData);

        if (!registerResponse.status) {
          toast.error(registerResponse.message || "Order creation failed.");
          setPaymentProcessing(false);
          return;
        }

        const order = registerResponse.data;

        const razorpayLoaded = await loadRazorpay();

        if (!razorpayLoaded) {
          toast.error("Unable to load payment gateway.");
          setPaymentProcessing(false);
          return;
        }

        const razorpay = new window.Razorpay({
          key: order.razorpay_key,
          amount: order.amount,
          currency: order.currency,
          order_id: order.razorpay_order_id,
          name: "Banking & Finance Legal Summit",
          description: order.order_number,

          prefill: {
            name: order.user.name,
            email: order.user.email,
            contact: order.user.phone,
          },

          handler: async (response) => {
            try {
              const verifyResponse = await verifyPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              });

              if (!verifyResponse.status) {
                toast.error(
                  verifyResponse.message || "Payment verification failed.",
                );
                return;
              }

              const thankYouData = {
                order: {
                  orderNumber: order.order_number,
                  orderId: order.razorpay_order_id,
                  amount: order.amount,
                  currency: order.currency,
                },
                user: {
                  name: order.user.name,
                  email: order.user.email,
                },
              };

              sessionStorage.setItem(
                "bfls-order-success",
                JSON.stringify(thankYouData),
              );

              toast.success("Payment Successful");
              router.push("/thank-you");
            } catch (error) {
              console.error("Payment verification failed:", error);
              toast.error("Payment verification failed.");
            } finally {
              setPaymentProcessing(false);
            }
          },

          modal: {
            ondismiss: async () => {
              await handlePaymentFailure(order.razorpay_order_id);
              toast.error("Payment cancelled.");
            },
          },

          theme: {
            color: "#D0252D",
          },
        });

        razorpay.on("payment.failed", async () => {
          await handlePaymentFailure(order.razorpay_order_id);
          toast.error("Payment failed.");
        });

        razorpay.open();
      } catch (error) {
        console.error("Order registration failed:", error);
        toast.error("Order creation failed.");
        setPaymentProcessing(false);
      }
    },
    [handlePaymentFailure, router],
  );

  if (loading) {
    return (
      <main className="mt-20 min-h-screen bg-white">
        <div className="mx-auto w-full max-w-290 px-4 py-10 sm:py-[50px] lg:py-[60px]">
          Loading cart...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mt-20 min-h-screen bg-white">
        <div className="mx-auto w-full max-w-290 px-4 py-10 sm:py-[50px] lg:py-[60px]">
          {error}
        </div>
      </main>
    );
  }

  return (
    <main className="mt-20 min-h-screen bg-white">
      <div className="mx-auto w-full max-w-290 px-4 py-10 sm:py-[50px] lg:py-[60px]">
        <div className="grid grid-cols-1 items-start gap-[35px] lg:grid-cols-[minmax(0,760px)_340px]">
          <section className="min-w-0">
            <h2 className="mb-[13px] text-[24px] font-bold uppercase text-[#d9232e]">
              YOUR TICKET
            </h2>

            {removedItemName && (
              <div className="mb-[26px] flex items-center justify-between rounded-[5px] border border-[#e0e3e7] bg-[#f5f5f5] px-4 py-3 text-[14px] text-[#333]">
                <span>
                  <strong>{removedItemName}</strong> removed.
                </span>

                <button
                  type="button"
                  onClick={async () => {
                    const success = await undoRemoveItem();

                    if (success) {
                      setRemovedItemName("");
                    }
                  }}
                  disabled={updating}
                  className="font-semibold text-[#d9232e] underline underline-offset-2 hover:opacity-80 disabled:opacity-50"
                >
                  {updating ? "Restoring..." : "Undo?"}
                </button>
              </div>
            )}

            <div className="mb-[26px] rounded-[5px] border border-[#f3b8bc] bg-[#fffafa]">
              {cart?.items.length ? (
                cart.items.map((item) => (
                  <div
                    key={item.plan_id}
                    className="flex items-center justify-between px-4 py-3 text-[#333]"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={async () => {
                          setRemovedItemName(item.plan_name);
                          await removeItem(item.plan_id);
                        }}
                        disabled={updating}
                        aria-label={`Remove ${item.plan_name}`}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#d9232e] transition-colors hover:bg-[#d9232e] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        ×
                      </button>

                      <div>
                        <p className="font-semibold text-[#333]">
                          {item.plan_name}
                        </p>

                        <p className="text-sm text-gray-500">
                          ₹{item.price.toLocaleString("en-IN")} ×{" "}
                          {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={updating || item.quantity <= 1}
                        onClick={() =>
                          updateCart(item.plan_id, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        -
                      </button>

                      <span className="min-w-[20px] text-center font-medium">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        disabled={updating}
                        onClick={() =>
                          updateCart(item.plan_id, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        +
                      </button>

                      <p className="min-w-[90px] text-right font-semibold">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-4 text-sm text-gray-500">
                  Your cart is empty.
                </div>
              )}
            </div>

            <CouponSection
              isOpen={couponOpen}
              onToggle={toggleCoupon}
              couponCode={cart?.coupon?.code ?? null}
              updating={updating}
              error={couponError}
              onApply={applyCoupon}
              onRemove={removeCoupon}
            />

            <h2 className="mb-[23px] text-[20px] font-bold uppercase text-[#d9232e]">
              BILLING DETAILS
            </h2>

            <BillingDetails
              onSubmit={handleOrder}
              loading={paymentProcessing}
            />

            <AssistanceSection />
          </section>

          <aside className="self-start lg:sticky lg:top-[100px]">
            {cart && (
              <OrderSummary
                subtotal={cart.subtotal}
                gstPercent={cart.gst_percent}
                gstAmount={cart.gst_amount}
                total={cart.total}
                discount={cart.discount}
                coupon={cart.coupon}
                items={cart.items}
                paymentProcessing={paymentProcessing}
              />
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
