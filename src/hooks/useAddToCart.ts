"use client";

import { useState } from "react";
import { addToCart } from "../services/cart.service";

interface AddToCartData {
  event_type_id: number;
  event_id: number;
  plan_id: number;
  quantity: number;
}

export function useAddToCart() {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (data: AddToCartData) => {
    try {
      setLoading(true);

      const response = await addToCart(data);

      if (!response.status) {
        throw new Error(response.message || "Unable to add item to cart.");
      }

      return response;
    } catch (error) {
      console.error("Add to cart failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    addToCart: handleAddToCart,
    loading,
  };
}
