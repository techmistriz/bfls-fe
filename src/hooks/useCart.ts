"use client";

import { useCallback, useEffect, useState } from "react";

import type { CartData } from "@/src/types/cart";
import {
  applyCoupon,
  getCart,
  removeCoupon,
  removeItem,
  undoRemoveItem,
  updateCart,
} from "../services/cart.service";
import axios from "axios";

export const useCart = () => {
  const [cart, setCart] = useState<CartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [couponError, setCouponError] = useState("");

  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getCart();

      if (response.status) {
        setCart(response.data ?? null);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      setError("Failed to load cart.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdateCart = useCallback(
    async (planId: number, quantity: number) => {
      try {
        setUpdating(true);
        setError("");

        const response = await updateCart(planId, quantity);

        if (!response.status) {
          setError(response.message);
          return;
        }

        await fetchCart();
      } catch (error) {
        console.error("Failed to update cart:", error);
        setError("Failed to update cart.");
      } finally {
        setUpdating(false);
      }
    },
    [fetchCart],
  );

  const handleRemoveItem = useCallback(
    async (planId: number) => {
      try {
        setUpdating(true);
        setError("");

        const response = await removeItem(planId);

        if (!response.status) {
          setError(response.message);
          return;
        }

        await fetchCart();
      } catch (error) {
        console.error("Failed to remove cart item:", error);
        setError("Failed to remove cart item.");
      } finally {
        setUpdating(false);
      }
    },
    [fetchCart],
  );

  const handleUndoRemoveItem = useCallback(async () => {
    try {
      setUpdating(true);
      setError("");

      const response = await undoRemoveItem();

      if (!response.status) {
        setError(response.message);
        return false;
      }

      await fetchCart();
      return true;
    } catch (error) {
      console.error("Failed to undo removed item:", error);
      setError("Failed to restore removed item.");
      return false;
    } finally {
      setUpdating(false);
    }
  }, [fetchCart]);

  const handleApplyCoupon = useCallback(
    async (couponCode: string) => {
      try {
        setUpdating(true);
        setCouponError("");

        const response = await applyCoupon(couponCode);

        if (!response.status) {
          setCouponError(response.message);
          return false;
        }

        await fetchCart();
        return true;
      } catch (error) {
        console.error("Failed to apply coupon:", error);
        setCouponError("Failed to apply coupon.");
        return false;
      } finally {
        setUpdating(false);
      }
    },
    [fetchCart],
  );

  const handleRemoveCoupon = useCallback(
    async (couponCode: string) => {
      try {
        setUpdating(true);
        setCouponError("");

        const response = await removeCoupon(couponCode);

        if (!response.status) {
          setCouponError(response.message);
          return false;
        }

        await fetchCart();
        return true;
      } catch (error) {
        console.error("Failed to remove coupon:", error);

        if (axios.isAxiosError(error)) {
          setCouponError(
            error.response?.data?.message || "Failed to remove coupon.",
          );
        } else {
          setCouponError("Failed to remove coupon.");
        }

        return false;
      } finally {
        setUpdating(false);
      }
    },
    [fetchCart],
  );

  useEffect(() => {
    let cancelled = false;

    const loadCart = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getCart();

        if (cancelled) {
          return;
        }

        if (response.status) {
          setCart(response.data ?? null);
        } else {
          setError(response.message);
        }
      } catch (error) {
        if (cancelled) {
          return;
        }

        console.error("Failed to fetch cart:", error);
        setError("Failed to load cart.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadCart();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    cart,
    loading,
    updating,
    error,
    couponError,
    refetchCart: fetchCart,
    updateCart: handleUpdateCart,
    removeItem: handleRemoveItem,
    applyCoupon: handleApplyCoupon,
    removeCoupon: handleRemoveCoupon,
    undoRemoveItem: handleUndoRemoveItem,
  };
};
