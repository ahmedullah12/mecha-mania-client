export type TProduct = {
  _id: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  quantity: number;
  rating: number;
  imageUrl: string;
};


export type TProductFormData = {
  title: string;
  price: number;
  description: string;
  quantity: number;
  rating: number;
  brand: string;
}