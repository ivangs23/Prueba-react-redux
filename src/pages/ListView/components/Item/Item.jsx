import React from 'react';

import './Item.scss';

function Item({ data, navigate }) {
  return (
    <div className="col-md-3">
      <button className="card  mb-4 itemButton" onClick={() => navigate(data.id)}>
        <div id="itemCard" className="w-100 card-body d-flex flex-column align-items-center">
          <img className="w-50 mb-3" src={data.imgUrl} alt="imgUrl" />
          <p className="card-title text-center fw-bolder">
            {data.brand}
            {` ${data.model}`}
          </p>
          <h5 className="card-text text-center fw-bolder">
            {data.price > 0 ? `${data.price}€` : 'Precio no disponible'}
          </h5>
        </div>
      </button>
    </div>
  );
}

export default Item;
