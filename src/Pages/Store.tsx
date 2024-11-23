import React, { useState } from "react";
import { FaInfinity } from "react-icons/fa";
import { Modal } from "../Components/Modal";

// Define Product type
type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

// Dummy product data
const products: Product[] = [
  {
    id: 1,
    name: "Gaming Laptop",
    image: "https://via.placeholder.com/150",
    price: 1200,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    image: "https://via.placeholder.com/150",
    price: 150,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image: "https://via.placeholder.com/150",
    price: 50,
  },
  {
    id: 4,
    name: "Ultra HD Monitor",
    image: "https://via.placeholder.com/150",
    price: 300,
  },
  {
    id: 5,
    name: "PC Headset",
    image: "https://via.placeholder.com/150",
    price: 100,
  },
];

const Store: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);

  const handleOpen = (selectedProduct?: Product) => {
    setOpen(!open);
    setProduct(selectedProduct || null);
  };

  return (
    <div className="p-10 flex flex-col items-center gap-4">
      <div className="icon-container bg-black rounded-full p-4">
        <FaInfinity size={50} color="white" />
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                onClick={() => handleOpen(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} handleOpen={() => handleOpen()} product={product} />
    </div>
  );
};

export default Store;
