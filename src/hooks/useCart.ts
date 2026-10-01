"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import type { CartData } from "@/src/types/cart";
import {
  applyCoupon,
  getCart,
  removeCoupon,
  removeItem,
  undoRemoveItem,
  updateCart,
} from "../services/cart.service";

export const useCart = () => {
  const [cart, setCart] = useState<CartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponUpdating, setCouponUpdating] = useState(false);

  const refreshCart = useCallback(async () => {
    try {
      const response = await getCart();

      if (response.status) {
        setCart(response.data ?? null);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Failed to refresh cart:", error);
      setError("Failed to refresh cart.");
    }
  }, []);

  const handleUpdateCart = useCallback(
    async (planId: number, quantity: number) => {
      const nextQuantity = Number(quantity);

      if (!Number.isInteger(nextQuantity) || nextQuantity < 1) {
        return;
      }

      try {
        setUpdating(true);
        setError("");

        const response = await updateCart(planId, nextQuantity);

        if (!response.status) {
          setError(response.message);
          return;
        }

        if (response.data) {
          setCart(response.data);
        }
      } catch (error) {
        console.error("Failed to update cart:", error);
        setError("Failed to update cart.");
      } finally {
        setUpdating(false);
      }
    },
    [],
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

        await refreshCart();
      } catch (error) {
        console.error("Failed to remove cart item:", error);
        setError("Failed to remove cart item.");
      } finally {
        setUpdating(false);
      }
    },
    [refreshCart],
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

      await refreshCart();
      return true;
    } catch (error) {
      console.error("Failed to undo removed item:", error);
      setError("Failed to restore removed item.");
      return false;
    } finally {
      setUpdating(false);
    }
  }, [refreshCart]);

  const handleApplyCoupon = useCallback(
    async (couponCode: string) => {
      try {
        setCouponUpdating(true);
        setCouponError("");

        const response = await applyCoupon(couponCode);

        if (!response.status) {
          setCouponError(response.message);
          return false;
        }

        await refreshCart();
        return true;
      } catch (error) {
        console.error("Failed to apply coupon:", error);
        setCouponError("Failed to apply coupon.");
        return false;
      } finally {
        setCouponUpdating(false);
      }
    },
    [refreshCart],
  );

  const handleRemoveCoupon = useCallback(
    async (couponCode: string) => {
      try {
        setCouponUpdating(true);
        setCouponError("");

        const response = await removeCoupon(couponCode);

        if (!response.status) {
          setCouponError(response.message);
          return false;
        }

        await refreshCart();
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
        setCouponUpdating(false);
      }
    },
    [refreshCart],
  );

  useEffect(() => {
    const loadCart = async () => {
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
    };

    loadCart();
  }, []);

  return {
    cart,
    loading,
    updating,
    couponUpdating,
    error,
    couponError,
    refetchCart: refreshCart,
    updateCart: handleUpdateCart,
    removeItem: handleRemoveItem,
    applyCoupon: handleApplyCoupon,
    removeCoupon: handleRemoveCoupon,
    undoRemoveItem: handleUndoRemoveItem,
  };
};
