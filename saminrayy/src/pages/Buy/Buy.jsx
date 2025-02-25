import { useContext } from "react";
import { CartContext } from "../../CartContext";
import "./Basket.css";
const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, clearFromCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div style={{ textAlign: "center" }} className="basket">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="btnBuyy dec"
                onClick={() => removeFromCart(item.id)}
              >
                -
              </button>
              <button className="btnBuyy" onClick={() => addToCart(item)}>
                +
              </button>
              <button className="btnBuy" onClick={() => clearFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <div>
            <h3 style={{ margin: "10px 0" }}>
              Total Price: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
