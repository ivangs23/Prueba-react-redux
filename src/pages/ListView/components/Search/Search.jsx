import React from 'react';

function Search({ search }) {
  return (
    <div className="d-flex justify-content-end mt-4 mb-4 ">
      <input type="text" placeholder="SEARCH" onChange={(event) => search(event.target.value)} />
    </div>
  );
}

export default Search;
