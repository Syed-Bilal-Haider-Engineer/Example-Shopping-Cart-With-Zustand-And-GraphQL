import React, { useEffect, useState } from "react";
import useCartStore from "../../store/cartStore";
import styles from "./Cart.module.css";
function Cart() {
  const { cart, removeItem, updateQuantity } = useCartStore();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <div className={styles.container} style={{ marginTop: "4em" }}>
      <h2 className={styles.heading}>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item__image-container">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart-item__image"
                />
              </div>
              <div className="cart-item__details">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__price">Price: ${item.price}</p>
                <p className="cart-item__quantity">Quantity: {item.quantity}</p>
                <div className="cart-item__actions">
                  <button
                    className="cart-item__remove-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                  <p className="cart-item__input-container">
                    Quantity:
                    <input
                      type="number"
                      className="cart-item__quantity-input"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      min="1"
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}

          <h3 className={styles.totalPrice}>
            Total Price: ${totalPrice.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
