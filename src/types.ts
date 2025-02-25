export interface Product {
  id: string;
  title: string;
  description: string;
  price?: string;
  imageUrl: string;
  source: {
    name: string;
    url: string;
  };
}