import { configureStore } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import {cartReducer} from './reducers/cartReducers';
import Cookie from 'js-cookie';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const cartItemsString = Cookie.get('cartItems');
const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];

const userInfo = localStorage.getItem('userInfo');
const parsedUserInfo = userInfo ? JSON.parse(userInfo) : null;

const initialState = { cart: { cartItems }, userSignin: { userInfo: parsedUserInfo } };

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
  },
  preloadedState: initialState,
  middleware: [thunk],
});

export default store;
