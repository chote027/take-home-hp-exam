export interface ListEntity {
  id?: number;
  title: string;
  created_at: Date;
  description: string;
  status: string;
}

export interface MapItem {
  [key: string]: string | number;
}
