import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bag = () => {
  const [bagItems, setBagItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);     

  
  useEffect(() => {
    const fetchBagItems = async () => {
      try {
        const response = await axios.get(`https://tatacliq-backend-2.onrender.com/api/bag`); 
        setBagItems(response.data);
        setLoading(false);         
      } catch (err) {
        setError('Failed to fetch bag items');
        setLoading(false);     
      }
    };

    fetchBagItems(); 
  }, []); 

  
  const calculateTotal = () => {
    return bagItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className="bag-page">
      <h1>Your Shopping Bag</h1>
      <ul>
        {bagItems.map(item => (
          <li key={item.id}>
            {item.name} - ₹{item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ₹{calculateTotal()}</h2>
    </div>
  );
};

export default Bag;
