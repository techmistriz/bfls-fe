export interface ApiResponse<T = unknown> {
  status: boolean;
  message?: string;
  data: T;
}

export interface ApiError {
  message: string;
  status: number | null;
  data?: unknown;
}
