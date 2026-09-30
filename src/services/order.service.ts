import axios from "axios";
import api from "@/src/network/axios";
import type {
  RegisterOrderPayload,
  RegisterOrderResponse,
  VerifyPaymentPayload,
  VerifyPaymentResponse,
} from "@/src/types/order";

export const registerOrder = async (
  payload: RegisterOrderPayload,
): Promise<RegisterOrderResponse> => {
  console.log("📦 Register Order Payload:", payload);

  try {
    const res = await api.post<RegisterOrderResponse>(
      "/order/register",
      payload,
    );

    console.log("✅ Register Order Response:", res.data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Register Order Failed");
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);
      console.error("Request Payload:", payload);
      console.error("Headers:", error.response?.headers);
    } else {
      console.error("❌ Register Order Error:", error);
    }

    throw error;
  }
};

export const verifyPayment = async (
  payload: VerifyPaymentPayload,
): Promise<VerifyPaymentResponse> => {
  console.log("💳 Verify Payment Payload:", payload);

  try {
    const res = await api.post<VerifyPaymentResponse>(
      "/order/verify-payment",
      payload,
    );

    console.log("✅ Verify Payment Response:", res.data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Verify Payment Failed");
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);
      console.error("Request Payload:", payload);
    } else {
      console.error("❌ Verify Payment Error:", error);
    }

    throw error;
  }
};

export const paymentFail = async (razorpay_order_id: string) => {
  console.log("⚠️ Payment Fail Payload:", { razorpay_order_id });

  try {
    const res = await api.post("/payment-fail", {
      razorpay_order_id,
    });

    console.log("✅ Payment Fail Response:", res.data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Payment Fail Request Failed");
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);
    } else {
      console.error("❌ Payment Fail Error:", error);
    }

    throw error;
  }
};
