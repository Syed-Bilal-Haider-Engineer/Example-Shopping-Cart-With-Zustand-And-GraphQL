import React from "react";
import useCartStore from "../../store/cartStore";
import styles from "./Checkout.module.css";
const Checkout = () => {
  const { cart, clearCart } = useCartStore();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
    <h2 className={styles.heading}>Checkout</h2>
    {cart.length === 0 ? (
      <p>No items in the cart</p>
    ) : (
      <>
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.itemDetails}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <h3 className={styles.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</h3>
        <div className={styles.buttons}>
          <button className={styles.clearButton} onClick={() => clearCart()}>
            Clear Cart
          </button>
          <button className={styles.checkoutButton} onClick={() => alert("Checkout Successful!")}>
            Proceed to Checkout
          </button>
        </div>
      </>
    )}
  </div>
  );
};

export default Checkout;
