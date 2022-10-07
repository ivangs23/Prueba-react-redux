import { configureStore } from '@reduxjs/toolkit';
// reducer
import mobiles from './slices/mobiles';

export default configureStore({
  reducer: {
    mobiles,
  },
});
