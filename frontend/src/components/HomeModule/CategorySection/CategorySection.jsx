import React from "react";
import "./categorySection.css";

const categories = [
    {
      title: "Electronics",
      image: "https://img.icons8.com/ios-filled/100/000000/electronics.png",
      bgColor: "#e0f7fa",
    },
    {
      title: "Fashion",
      image: "https://img.icons8.com/ios-filled/100/000000/clothes.png",
      bgColor: "#fce4ec",
    },
    {
      title: "Home & Kitchen",
      image: "https://img.icons8.com/ios-filled/100/000000/kitchen-room.png",
      bgColor: "#f3e5f5",
    },
    {
      title: "Books",
      image: "https://img.icons8.com/ios-filled/100/000000/books.png",
      bgColor: "#fff3e0",
    },
    {
      title: "Beauty",
      image: "https://img.icons8.com/ios-filled/100/000000/lipstick.png",
      bgColor: "#fce4ec",
    },
    {
      title: "Sports",
      image: "https://img.icons8.com/ios-filled/100/000000/soccer-ball.png",
      bgColor: "#e8f5e9",
    },
    {
      title: "Toys",
      image: "https://img.icons8.com/ios-filled/100/000000/teddy-bear.png",
      bgColor: "#f9fbe7",
    },
    {
      title: "Groceries",
      image: "https://img.icons8.com/ios-filled/100/000000/shopping-basket.png",
      bgColor: "#f1f8e9",
    },
  ];
  
  

const CategorySection = () => {
  return (
    <div className="category-container">
      {categories.map((cat, index) => (
        <div
          className="category-card"
          key={index}
          style={{ backgroundColor: cat.bgColor }}
        >
          <img src={cat.image} alt={cat.title} className="category-image" />
          <h3 className="category-title">{cat.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
