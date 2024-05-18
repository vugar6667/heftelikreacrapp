import React, { useReducer } from 'react';
import Navbar from './components/Navbar';
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import './App.css';


const initialState = {
  cart: [
    { id: 1, name: 'Samsung Galaxy S8', price: 399, quantity: 1, image: 'https://www.course-api.com/images/cart/phone-1.png' },
    { id: 2, name: 'Google Pixel', price: 499, quantity: 1, image: 'https://www.course-api.com/images/cart/phone-2.png' },
    { id: 3, name: 'Xiaomi Redmi Note 2', price: 699, quantity: 1, image: 'https://www.course-api.com/images/cart/phone-3.png' },
    { id: 4, name: 'Samsung Galaxy S7', price: 599, quantity: 1, image: 'https://www.course-api.com/images/cart/phone-4.png' },
    
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREASE':
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0),
      };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.id),
      };
    case 'CLEAR':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = (id) => {
    dispatch({ type: 'INCREASE', id });
  };

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', id });
  };

  const remove = (id) => {
    dispatch({ type: 'REMOVE', id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  const total = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartItemsCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Navbar cartItemsCount={cartItemsCount} />
      <section style={styles.section}>
        <h2 style={styles.heading}>YOUR BAG</h2>
        {state.cart.length === 0 ? (
          <p style={styles.emptyMessage}>Is currently empty</p>
        ) : (
          <div style={styles.cardContainer}>
            {state.cart.map(item => (
              <CartItem
                key={item.id}
                item={{ ...item, remove }}
                increase={increase}
                decrease={decrease}
              />
            ))}
          </div>
        )}
      </section>
      <Footer total={total} clearCart={clearCart} />
    </div>
  );
};

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    paddingTop: '7rem', 
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyMessage: {
    fontStyle: 'italic',
    fontSize: '1.2rem',
  },
};

export default App;