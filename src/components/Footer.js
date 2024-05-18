import React from 'react';

const Footer = ({ total, clearCart }) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.total}>Total: {total} dollar</div>
      <button onClick={clearCart} style={styles.clearButton}>Clear Card</button>
      <div style={styles.emptyMessage}></div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    padding: '1rem',
  },
  total: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  clearButton: {
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '1rem',
  },
  emptyMessage: {
    fontStyle: 'italic',
  },
};

export default Footer;