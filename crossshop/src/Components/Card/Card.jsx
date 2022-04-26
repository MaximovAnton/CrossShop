import React, { useState } from "react";
import './Card.css'
import svg_unliked from '../../images/heart_unliked.png'
import plus from '../../images/plus.svg'

const Card = ({name, price}) => {
   
    return(
            <div className="card">
                <div className="favorite">
                    <img src={svg_unliked} alt="" width={30} height={30}/>
                </div>
                
                <div className="card_img">
                    <img src="https://zastavok.net/main/raznoe/1415018881.jpg" alt="" />
                </div>
                
                    <div className="card_title">{name}</div>
                    <div className="card_bottom">
                        <div className="card_price">{price} $</div>
                        <img src={plus} alt="plus" />
                    </div>
                    
                
            </div>
    )
}

export default Card