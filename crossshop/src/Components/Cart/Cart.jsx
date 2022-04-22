import React from "react";
import "./Cart.css";
import cross from '../../images/heart_like.svg'

const Cart = () => {
  return (
    <div className="overlay">
        <div className="cart">
            <h3>Корзина</h3>
            <div className="cartItem">
                <img src={cross} alt="cross" />
                <div className="cartInfo">
                    <p>aaa</p>
                    <b>1200</b> 
                </div>
                <button className="close">X</button>
            </div>
        </div>
    </div>
  );
};

export default Cart;
