import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Cart.scss';

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useSelector((state) => state.mobiles);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify((cart)));
  }, [cart]);
  const showCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={showCart}
      >
        Carrito
      </button>
      {isOpen && (
        <div className="infoCart">
          <ul>
            {cart && cart.map((val, index) => (
              <li key={index}>
                <div className="row">
                  <div className="col d-flex align-items-center">
                    <img src={val.imgUrl} alt={val.id} />
                    <div className="">
                      <h6>{`${val.brand} ${val.model}`}</h6>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
