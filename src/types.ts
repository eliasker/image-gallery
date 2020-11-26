export interface Picture {
  id: string;
  alt: string;
  category: string;
  desc?: string[];
  url: string;
  thumbnail_url?: string;
}

export interface Category {
  name: string;
  images: Picture[];
}

export type Collection = {
  images: Picture[];
}
