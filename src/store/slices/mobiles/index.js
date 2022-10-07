import { createSlice } from '@reduxjs/toolkit';
// axios
import axios from 'axios';

export const mobileSlice = createSlice({
  name: 'mobiles',
  initialState: {
    list: [],
    filterList: [],
    detailsMobile: null,
    cart: [],
    isLoading: true,
  },
  reducers: {
    setMobileList: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list = action.payload;
      state.filterList = action.payload;
      state.isLoading = false;
    },
    setFilterMobileList: (state, action) => {
      state.filterList = action.payload;
      state.isLoading = false;
    },
    setDetailsMobile: (state, action) => {
      state.detailsMobile = action.payload;
      state.isLoading = false;
    },
    setCounterCart: (state, action) => {
      state.cart.push(action.payload);
      state.isLoading = false;
    },
    setStateCart: (state, action) => {
      state.cart = action.payload;
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  setMobileList,
  setFilterMobileList,
  setDetailsMobile,
  setCounterCart,
  setIsLoading,
  setStateCart,
} = mobileSlice.actions;

export default mobileSlice.reducer;

export const fetchAllMobiles = () => (dispatch) => {
  dispatch(setIsLoading());
  axios
    .get('https://front-test-api.herokuapp.com/api/product')
    .then((response) => {
      dispatch(setMobileList(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchDetailsMobile = (id) => (dispatch) => {
  dispatch(setIsLoading());
  axios
    .get(`https://front-test-api.herokuapp.com/api/product/${id}`)
    .then((response) => {
      dispatch(setDetailsMobile(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchStateCart = (state) => (dispatch) => {
  dispatch(setIsLoading());
  dispatch(setStateCart(state));
};

export const fetchAddCart = (options, id, detailMobile) => (dispatch) => {
  dispatch(setIsLoading());
  axios
    .post('https://front-test-api.herokuapp.com/api/cart', {
      id,
      ...options,
    })
    .then(() => {
      dispatch(setCounterCart({ id, ...options, ...detailMobile }));
    })
    .catch((error) => console.log(error));
};
