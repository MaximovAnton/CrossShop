import React from "react";
import "./Content.css";
import Card from "../Card/Card";

const Content = () => {
  return (
    <div>
        <div className="title">
            <h3>Весь ассортимент</h3>
        </div>
      
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Content;
