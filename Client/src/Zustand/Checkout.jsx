import React from "react";
import useCartStore from "../store/cartStore";

const Checkout = () => {
  const { cart, clearCart } = useCartStore();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "20px" }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h3>Total Amount: ${totalAmount}</h3>
          <button onClick={() => clearCart()}>Clear Cart</button>
          <button style={{marginLeft:"5px"}} onClick={() => alert("Checkout Successful!")}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
