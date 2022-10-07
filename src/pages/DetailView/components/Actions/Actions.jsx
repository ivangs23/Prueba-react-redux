import React, { useState } from 'react';

function Actions({ colors, storages, addCart }) {
  const [options, setOptions] = useState({
    colorCode: colors[0].code,
    storageCode: storages[0].code,
  });

  const handleChange = ({ target }) => {
    target.id === 'color'
      ? setOptions({ ...options, colorCode: target.value })
      : setOptions({ ...options, storageCode: target.value });
  };

  const select = (list, id) => (
    <div className="w-50 m-5">
      <select
        className="form-select"
        id={id}
        onChange={handleChange}
        aria-label="Default select example"
      >
        {list.map((item, index) => (
          <option key={index} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
  return (
    <div className="d-flex row">
      <div className="d-flex">
        {select(colors, 'color')}
        {select(storages, 'storage')}
      </div>
      <button onClick={() => addCart(options)} className="btn btn-primary">
        Añadir
      </button>
    </div>
  );
}

export default Actions;
