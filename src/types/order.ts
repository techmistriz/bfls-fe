export interface RegisterOrderPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  designation: string;
  company_name: string;
  address: string;
  country_id: number;
  state_id: number;
  city_id: number;
  pincode: string;
  gst_number?: string;
}

export interface OrderUser {
  name: string;
  email: string;
  phone: string;
}

export interface RegisterOrderData {
  razorpay_key: string;
  amount: number;
  currency: string;
  razorpay_order_id: string;
  order_number: string;
  user: OrderUser;
}

export interface RegisterOrderResponse {
  status: boolean;
  data: RegisterOrderData;
  message: string;
}

export interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface VerifyPaymentResponse {
  status: boolean;
  data: unknown;
  message: string;
}
