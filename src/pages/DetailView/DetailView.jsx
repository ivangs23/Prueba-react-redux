import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsMobile, fetchAddCart } from '../../store/slices/mobiles';

import './DetailView.scss';
import Actions from './components/Actions/Actions';
import Details from './components/Details/Details';

function DetailView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { detailsMobile, isLoading } = useSelector((state) => state.mobiles);

  const dispatch = useDispatch();

  const addCart = (options) => {
    dispatch(fetchAddCart(options, id, detailsMobile));
  };

  useEffect(() => {
    dispatch(fetchDetailsMobile(id));
  }, [dispatch]);

  return (
    <>
      {!isLoading && detailsMobile !== null ? (
        <div>
          <button className="back btn btn-primary" onClick={() => navigate(-1)}>
            Volver
          </button>
          <div className="base">
            <div className="row">
              <div className="col-md-6">
                <div className="avatarContainer">
                  <img src={detailsMobile.imgUrl} alt={detailsMobile.model} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detailsContainer">
                  <Details data={detailsMobile} />
                </div>
                <div className="actionsContainer">
                  {detailsMobile.options && (
                    <Actions
                      addCart={addCart}
                      colors={detailsMobile.options.colors}
                      storages={detailsMobile.options.storages}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cargando...</h1>
        </div>
      )}
    </>
  );
}

export default DetailView;
