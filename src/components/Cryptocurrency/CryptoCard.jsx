import React, { useState } from "react";
import styles from "./CryptoCard.module.css";

function CryptoCard({ name, price, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    if (quantity.toString().includes(".") || !quantity) {
      alert("Please enter a whole number (e.g., 1, 2, 3) for the quantity");
    } else {
      addToCart({ name, price, quantity });
      setQuantity(1);
    }
  };

  return (
    <div className={styles.cryptoCard}>
      <h3>{name}</h3>
      <p>Price: ${price && Number(price).toLocaleString()}</p>
      <input
        type="number"
        min={1}
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default CryptoCard;
