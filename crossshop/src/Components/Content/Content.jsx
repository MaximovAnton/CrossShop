import React, { useState } from "react";
import "./Content.css";
import Card from "../Card/Card";

const Content = () => {
  
  const cardArray = [
    {id: 1, name: 'Nike', price: 1200},
    {id: 2, name: 'Adidas', price: 1500},
    {id: 3, name: 'Puma', price: 1300}
  ]

  return (
    <div>
        <div className="title">
            <h3>Весь ассортимент</h3>
        </div>
      
      <div className="content">
        <div className="cardWrap">
          {cardArray.map(item => <Card  key={item.id} 
                                              name={item.name} 
                                              price={item.price}
                                              onFavourite={() => console.log(item.id, 'Добавили в закладки')}
                                              onPlus={() => console.log(item.id)}/>)}
        </div>
      </div>
    </div>
  );
};

export default Content;
