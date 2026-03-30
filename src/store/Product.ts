// store.ts
export interface Product {
  id: number;
  name: string;
  price: number;
   image: string;
  description: string;
  category: string;
  rating: number;
  sizes: string[];
}

export const clothingStore = {
  products: [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: 29.99,
      category: "Men",
       image: "https://m.media-amazon.com/images/I/71r5nZWxM+L._SL1500_.jpg",
      description: "Soft and breathable cotton t-shirt, perfect for everyday wear.",
      rating: 4.5,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      price: 59.99,
       image: "https://m.media-amazon.com/images/I/71r5nZWxM+L._SL1500_.jpg",
       category: "Men",
      description: "Classic slim fit denim jeans with stretch comfort.",
      rating: 4.3,
      sizes: ["28", "30", "32", "34", "36"]
    },
    {
      id: 3,
      name: "Summer Floral Dress",
      price: 49.99,
      category: "Women",
      image: "https://m.media-amazon.com/images/I/71r5nZWxM+L._SL1500_.jpg",
      description: "Beautiful floral print dress, perfect for summer days.",
      rating: 4.7,
      sizes: ["XS", "S", "M", "L"]
    },
       {
      id: 4,
      name: "Autumn Floral Dress",
      price: 49.99,
      category: "Women",
      image: "https://m.media-amazon.com/images/I/71r5nZWxM+L._SL1500_.jpg",
      description: "Beautiful floral print dress, perfect for summer days.",
      rating: 4.7,
      sizes: ["XS", "S", "M", "L"]
    }
 
  ]
};