 export type Product = {
  id: number
  name: string;
  image_url: string;
  price: number;
  rating: number;
  description: string;
  available: boolean;
  wishListed: boolean;
  addedToCart: boolean;
 // Optional Field:
 //  isOptional?: boolean;
 }
