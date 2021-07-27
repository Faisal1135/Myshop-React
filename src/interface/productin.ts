interface IProduct {
  _id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  image: string;
}

export default IProduct;
