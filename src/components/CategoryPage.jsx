import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/categoryPage.css';

const CategoryPage = () => {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://tatacliq-backend-2.onrender.com/api/products/${category}`); 
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleAddToBag = async (product) => {
    try {

      await axios.post(`${process.env.REACT_APP_API_URL}/api/bag`, { productId: product._id });
      alert(`${product.name} added to bag`);
    } catch (error) {
      console.error("Error adding to bag", error);
      alert("Error adding product to bag");
    }
  };

  return (
    <div>
      <h1>Products in {category} Category</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            
              <button onClick={() => handleAddToBag(product)} className="add-to-cart-btn">Add to Bag</button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
