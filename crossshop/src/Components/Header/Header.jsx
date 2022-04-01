import React from "react";
import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="block_logo">
                logo
            </div>
            <div className="cart">
                <ul>
                    <li></li>
                    <li><span>1200 $</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Header