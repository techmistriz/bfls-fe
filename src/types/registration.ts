export interface PriceTier {
  id: number;
  plan_id: number;
  min_quantity: number;
  max_quantity: number | null;
  price_per_unit: string;
  unit_type: string;
}

export interface RegistrationPlan {
  id: number;
  title: string;
  tag: string | null;
  starting_price: string;
  description: string;
  sort_order: number;
  price_tiers: PriceTier[];
}

export interface PlansResponse {
  status: boolean;
  data: RegistrationPlan[];
  meta: unknown[];
  message: string;
}
