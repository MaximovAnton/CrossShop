import React, { useState, useRef, useEffect } from "react";
import './Card.css'
import svg_unliked from '../../images/heart_unliked.png'
import plus from '../../images/plus.svg'
import ok from '../../images/ok.svg'

const Card = ({name, price, onFavourite, images, onAddToCart}) => {
    
    const [img, setImg] = useState(false)

    const setImgApply = (e) => {
        let a = {name, price, onFavourite, images, onAddToCart}
        onAddToCart(a)
        setImg(!img)
    }

    useEffect(() => {
        console.log('Переменная изменилась', img)
    },[img])

    return(
            <div className="card">
                <div className="favorite">
                    <img src={svg_unliked} alt="favorite" width={30} height={30} onClick={onFavourite}/>
                </div>
                
                <div className="card_img">
                    <img src={images} alt="" />
                </div>
                
                <div className="card_title">{name}</div>
                <div className="card_bottom">
                    <div className="card_price"> {price} $</div>
                    <img src={!img ? plus : ok} alt="plus" onClick={setImgApply}/>
                </div>
            </div>
    )
}

export default Card