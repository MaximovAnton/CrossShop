import "./CartItem.css";

const CartItem = ({id, img, name, price, deleteItemCart }) => {

  return (
    <div className="cartItem">
      <img src={img} alt="cross" />
      <div className="cartInfo">
        <p>{name}</p>
        <b>{price}</b>
      </div>
      <button className="close" onClick={() => deleteItemCart(id)}>X</button>
    </div>
  );
};

export default CartItem;
