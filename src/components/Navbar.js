import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItemsCount }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <div style={styles.logo}>UseReducer</div>
        <div style={styles.cartIcon}>
          <FaShoppingCart />
          <span style={styles.cartCount}>{cartItemsCount}</span>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    height: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
   
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '800px', 
  },
  logo: {
    fontSize: '1.5rem',
  },
  cartIcon: {
    position: 'relative',
    fontSize: '1.5rem',
  },
  cartCount: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '0.2rem 0.5rem',
    fontSize: '1rem',
  },
};

export default Navbar;