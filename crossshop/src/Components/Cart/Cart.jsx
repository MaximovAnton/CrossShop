import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";

const Cart = ({cartOpened, cartItems}) => {
  console.log(cartItems)
  return (
    
      
        <div className="cart">
          <div className="card_header">
            <h3>Корзина</h3>
            <button className="cart_close" onClick={cartOpened}>X</button>
          </div>
            
            <div className="items"> 
            {cartItems.map(item => <CartItem 
                                            key={item.id}
                                            img={item.images}
                                            name={item.name} 
                                            price={item.price}/>)}
              
            </div>
              
              
            <ul>
              <li>
                <span>Итого</span>
                <div></div>
                <b>20000</b>
              </li>
              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>100</b>
              </li>
              <li><button>Оформить</button></li>
            </ul>
        </div>
    
  );
};

export default Cart;
