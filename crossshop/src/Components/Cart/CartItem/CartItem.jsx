import "./CartItem.css";

const CartItem = ({ img, name, price }) => {
  return (
    <div className="cartItem">
      <img src={img} alt="cross" />
      <div className="cartInfo">
        <p>{name}</p>
        <b>{price}</b>
      </div>
      <button className="close">X</button>
    </div>
  );
};

export default CartItem;
