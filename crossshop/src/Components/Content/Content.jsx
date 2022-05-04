import React, { useState } from "react";
import "./Content.css";
import Card from "../Card/Card";

const Content = ({cardArray, onAddToCart, cartOpened}) => {
  
  return (
    <div>
        <div className="title">
            <h3>Весь ассортимент</h3>
        </div>
      
      <div className="content">
        <div className="cardWrap">
          {cardArray.map(item => <Card  key={item.id} 
                                        images={item.images}
                                        name={item.name} 
                                        price={item.price}
                                        onFavourite={() => console.log(item.id, 'Добавили в закладки')}
                                        onPlus={(obj) => console.log(obj)}
                                        onAddToCart={onAddToCart}
                                              />)}
        </div>
      </div>
    </div>
  );
};

export default Content;
