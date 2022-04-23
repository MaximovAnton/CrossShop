import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";


const Cart = () => {
  return (
    <div className="overlay">
        <div className="cart">
            <h3>Корзина</h3>
            <div className="items"> 
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
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
    </div>
  );
};

export default Cart;
