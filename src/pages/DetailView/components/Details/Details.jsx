import React from 'react';

function Details({ data }) {
  return (
    <>
      <h2 className="fw-bold">
        {data.brand}
        {` ${data.model}`}
      </h2>
      <h6 className="fw-bold">
        {data.dimentions.length > 3 ? data.dimentions : 'Dimensiones no disponibles'}
      </h6>
      <h6 className="fw-bold">{data.weight !== '' ? `${data.weight}gr` : 'Peso no disponible'}</h6>
      <h3 className="fw-bold primary">{data.price > 0 ? `${data.price}€` : 'Pecio no disponible'}</h3>
    </>
  );
}

export default Details;
