import React, { useEffect, useState } from 'react'; 
import useCartStore from '../store/cartStore';

function Cart() {
  const { cart, removeItem, updateQuantity } = useCartStore();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(newTotalPrice);
  }, [cart]); 
  return (
    <div>
      <h2>Cart</h2>
      {cart?.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cart?.map((item) => (
            <div key={item.id} style={{ marginBottom: "20px"}}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
              <p>
              Quantity:{" "}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                min="1"
              />
            </p>

            </div>
          ))}
          
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3> 
        </div>
      )}
    </div>
  );
}

export default Cart;
