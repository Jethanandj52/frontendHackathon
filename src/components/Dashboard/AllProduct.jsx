import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:7000/productApi/getProduct");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/productApi/deleteProduct/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateProduct/${id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Nav />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border shadow rounded p-4 bg-white">
            <img
              src={product.url}
              alt={product.productName}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{product.productName}</h2>
            <p className="text-gray-600">{product.discription}</p>
            <p className="text-blue-600 font-bold mt-1">Rs. {product.price}</p>
            <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>

            <div className="flex gap-2 justify-center">
              <button
                onClick={() => handleUpdate(product._id)}
                className="bg-green-400 text-white px-3 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
    </>
  );
};

export default AllProduct;
