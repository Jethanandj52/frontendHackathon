// components/AddProductForm.jsx
import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "../Home/Footer";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    discription: "",
    price: "",
    url: "",
    category: "",
     
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7000/productApi/addProduct", {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      });
      alert("✅ Product Added!");
      console.log(res.data);
    } catch (error) {
      alert("❌ Error Adding Product");
      console.error(error.response?.data || error.message);
    }
  };

  return (

    <>
<Nav/>
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Add New Product</h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            name="title"
            placeholder="Product Title"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.discription}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price (PKR)"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="url"
            placeholder="Image URL"
            value={formData.url}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

         
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          ➕ Add Product
        </button>
      </form>
    </div>

    <Footer/>
          </>
  );
};

export default AddProduct;
