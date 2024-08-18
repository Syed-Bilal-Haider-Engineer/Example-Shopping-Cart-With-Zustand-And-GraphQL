import React from "react";
import styles from './ProductsList.module.css'
import useCartStore from "../../store/cartStore";

const ProductList = () => {
  const addItem = useCartStore((state) => state.addItem);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Products</h2>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productPrice}>Price: ${product.price}</p>
          <button className={styles.addButton} onClick={() => addItem(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
