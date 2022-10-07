import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Item from './components/Item/Item';

import { fetchAllMobiles, setFilterMobileList } from '../../store/slices/mobiles';
import Search from './components/Search/Search';

function ListView() {
  const { list, filterList, isLoading } = useSelector((state) => state.mobiles);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (list.length === 0) dispatch(fetchAllMobiles());
  }, [dispatch]);

  const searchMobile = (chars) => {
    // eslint-disable-next-line consistent-return
    function fill(element) {
      const word = chars.toLowerCase().trim();
      if (
        element.brand.toLowerCase().trim().startsWith(word)
        || element.model.toLowerCase().trim().startsWith(word)
      ) {
        return element;
      }
    }

    const filter = list.filter(fill);

    dispatch(setFilterMobileList(filter));
  };

  const navigateToDetailProduct = (id) => {
    navigate(`/detail-view/${id}`);
  };

  return (
    <>
      {isLoading || list.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="container">
          <div className="row">
            <Search search={searchMobile} />
            {filterList.map((mobile, index) => (
              <Item key={index} data={mobile} navigate={navigateToDetailProduct} />
            ))}
            <div className="d-flex justify-content-center align-items-center">
              {filterList.length === 0 ? <h2>No hay coincidencias</h2> : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListView;
