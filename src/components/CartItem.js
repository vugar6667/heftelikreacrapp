import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartItem = ({ item, increase, decrease }) => {
  const [removing, setRemoving] = useState(false);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => {
      item.remove(item.id);
    }, 500); 
  };

  return (
    <div className={`card ${removing ? 'removing' : ''}`} style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />
      <div style={styles.info}>
        <h3>{item.name}</h3>
        <p>{item.price} dollar</p>
        <button onClick={handleRemove} style={styles.removeButton}>Remove</button>
      </div>
      <div style={styles.quantity}>
        <button onClick={() => increase(item.id)} style={{ ...styles.iconButton, color: 'blue' }}><FaChevronUp /></button>
        <span>{item.quantity}</span>
        <button onClick={() => decrease(item.id)} style={{ ...styles.iconButton, color: 'blue' }}><FaChevronDown /></button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    margin: '0.5rem 0',
    width: '800px',
    height: '80px',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
  },
  image: {
    width: '80px',
    height: '80px',
  },
  info: {
    flex: 1,
    padding: '0 1rem',
  },
  removeButton: {
    color: 'red',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  quantity: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconButton: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
};

export default CartItem;