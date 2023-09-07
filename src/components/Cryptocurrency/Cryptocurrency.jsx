import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import styles from "./Cryptocurrency.module.css";

function Cryptocurrency() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    updateCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div className={styles.cryptocurrency}>
      <h1>Crypto Purchase</h1>
      <div className={styles.cryptocurrencyCardContainer}>
        <CryptoCard name="Bitcoin" price="40000" addToCart={addToCart} />
        <CryptoCard name="Ethereum" price="2800" addToCart={addToCart} />
        <CryptoCard name="Litecoin" price="150" addToCart={addToCart} />
      </div>

      <div className={styles.cryptoCart}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className={styles.cryptoCartContainer}>
            {cart &&
              cart.map((item, index) => (
                <div key={index} className={styles.cryptoCartItem}>
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>
                    Total: $
                    {(
                      Number(item.price) * Number(item.quantity)
                    ).toLocaleString()}
                  </span>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))}
          </div>
        )}
        <h1>Total Cost: ${cartTotal && Number(cartTotal).toLocaleString()}</h1>
      </div>
    </div>
  );
}

export default Cryptocurrency;
