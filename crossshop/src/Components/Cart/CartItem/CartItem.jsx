import cross from '../../../images/heart_like.svg'
import './CartItem.css'

const CartItem = () => {
    return(
        <div className="cartItem">
                <img src={cross} alt="cross" />
                <div className="cartInfo">
                    <p>aaa</p>
                    <b>1200</b> 
                </div>
                <button className="close">X</button>
            </div>
    )
}

export default CartItem