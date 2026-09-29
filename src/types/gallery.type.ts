export interface GalleryItem {
  id: number;
  event_id: number;
  image: string;
  ordering: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface GalleryResponse {
  status: boolean;
  data: GalleryItem[];
  meta: unknown[];
  message: string;
}
