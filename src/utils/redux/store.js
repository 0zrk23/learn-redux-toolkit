import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../../features/cart/cartSlice'

// export 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // modal:
  },
})