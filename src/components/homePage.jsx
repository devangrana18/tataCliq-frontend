 
import axios from "axios";
import "../css/homePage.css";
import React, { useState, useEffect } from "react";
import Footer from "./footer";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderImages] = useState([
    "https://assets.tatacliq.com/medias/sys_master/images/62351056273438.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/62351056404510.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/62351056535582.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/62351056470046.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/62351056601118.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/62351056142366.jpg",
  ]);

  const [westside] = useState([
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351067381790.png",
      title: "BIBA",
      offer: "MIN. 30% OFF + 15% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351067447326.png",
      title: "BIBA",
      offer: "MIN. 30% OFF + 15% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351067643934.png",
      title: "BIBA",
      offer: "MIN. 30% OFF + 15% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351067709470.png",
      title: "BIBA",
      offer: "MIN. 30% OFF + 15% OFF",
    },
  ]);
  const [productCards] = useState([
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351066497054.png",
      title: "BIBA",
      offer: "MIN. 30% OFF + 15% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351066562590.png",
      title: "VERO MODA",
      offer: "UP TO 60% OFF + 10% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351066628126.png",
      title: "Adidas",
      offer: "FLAT 50% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351066791966.png",
      title: "Woodland",
      offer: "UP TO 40% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351066857502.png",
      title: "Levis",
      offer: "UP TO 40% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351066923038.png",
      title: "U.S POLO",
      offer: "UP TO 40% OFF",
    },
    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351066988574.png",
      title: "Titan",
      offer: "UP TO 20% OFF",
    },

    {
      imageUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/62351067054110.png",
      title: "Puma",
      offer: "UP TO 20% OFF",
    },
  ]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/categories`).then((response) => {
      setCategories(response.data);
    });
    

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [sliderImages.length]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="slider">
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        {sliderImages.map((image, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            {index === currentSlide && (
              <img src={image} alt={`Slide ${index}`} />
            )}
          </div>
        ))}
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <div className="category-card" key={index}  >
            <img src={category.imageUrl} alt={category.category}/>
          </div>
        ))}
      </div>
     
      <h2 className="section-title">Best Brands On Offer</h2>
      <div className="product-cards">
        {productCards.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.title} />
          </div>
        ))}
      </div>
 {/* onClick={(e) => {console.log(e); handleClick(category.category)}} */}
      <div className="westside-store">
        <h2 className="section-title">The Westside Store</h2>
        <div className="westside-cards">
          {westside.map((category, index) => (
            <div className="westside-card" key={index}>
              <img src={category.imageUrl} alt={category.title} />
            </div>
          ))}
        </div>
      </div>
          <Footer></Footer>
    </div>
  );
};

export default HomePage;
