import React, { useState } from "react";
import './Card.css'
import svg_unliked from '../../images/heart_unliked.png'
import like from '../../images/heart_like.svg'
import plus from '../../images/plus.svg'
import Cart from '../Cart/Cart.jsx'

const Card = () => {
   
    return(
            <div className="card">
                <div className="favorite">
                    <img src={svg_unliked} alt="" width={30} height={30}/>
                </div>
                
                <div className="card_img">
                    <img src="https://zastavok.net/main/raznoe/1415018881.jpg" alt="" />
                </div>
                
                    <div className="card_title">Nike</div>
                    <div className="card_bottom">
                        <div className="card_price">100$</div>
                        <img src={plus} alt="" />
                    </div>
                    
                
            </div>
    )
}

export default Card