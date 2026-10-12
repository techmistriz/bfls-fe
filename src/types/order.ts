export interface AttendeePayload {
  attendee_name: string;
  attendee_email: string;
  attendee_phone: string;
  attendee_company: string;
  attendee_designation: string;
}

export interface RegisterOrderPayload {
  full_name: string;
  email: string;
  phone: string;
  firm_name: string;
  company_name: string;
  gst_number?: string;
  message?: string;
  address: string;
  city_id: number;
  state_id: number;
  country_id: number;
  pincode: string;
  attendees: AttendeePayload[];
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
