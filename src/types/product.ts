export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  image_url: string;
  created_at: string;
  author: string;
  category: string;
}

export interface DestinyResult {
  name: string;
  title: string;
  description: string;
  colors: string;
  stones: string;
  advice: string;
  canChi: string;
  year: number;
  userName?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  meaning?: string;
  specs?: {
    material?: string;
    size?: string;
    count?: string;
    certification?: string;
    [key: string]: string | undefined;
  };
  images?: string[];
  [key: string]: any;
}
