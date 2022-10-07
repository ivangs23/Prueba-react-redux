import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchStateCart } from '../../store/slices/mobiles';
import useLocalStorageStage from '../../hooks/useLocalStorage';

import Cart from '../Cart/Cart';

import './Header.scss';

function Header() {
  const [value] = useLocalStorageStage('cart', []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStateCart(value));
  }, [dispatch]);

  return (
    <nav className="navbar navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          React redux App
        </a>
        <Cart />
      </div>
    </nav>
  );
}

export default Header;
