import React from "react";
import './Header.css'

const Header = ({cartOpened}) => {
    return(
        <div className="header">
            <div className="block_logo">
                <div className="logo">
                    <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png" alt="" />
                </div>
                <div className="content_logo">
                    <h3>логотип</h3>
                    <span>Название</span>
                </div>
            </div>
            <div className="header_cart">
                <ul>
                    <li><button className="button" onClick={cartOpened}>Корзина</button></li>
                    <li><span>1200 $</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Header