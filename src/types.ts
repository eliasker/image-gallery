export interface Picture {
  id: string;
  alt: string;
  desc?: string[];
  url: string;
  thumbnail_url?: string;
}

// TODO: Category should have a name (and an id?)
export interface Category {
  images: Picture[];
}
