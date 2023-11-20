import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING } from "../constants/cartConstants";
import data from '../data';

const addToCart = (productId) => async (dispatch, getState) => {
    try {
      // Find the product details from the data.js file based on productId
      const product = data.products.find((p) => p._id === productId);
  
      if (product) {
        // Get the existing cart items from the state
        const { cart: { cartItems } } = getState();
  
        // Check if the product is already in the cart
        const existingItem = cartItems.find((x) => x.product === product._id);
  
        if (existingItem) {
          dispatch({
            type: CART_ADD_ITEM,
            payload: {
              product: product._id,
              name: product.name,
              image: product.image,
              // Add other product details as needed
            },
          });
        } else {
          // If the product is not in the cart, add it
          dispatch({
            type: CART_ADD_ITEM,
            payload: {
              product: product._id,
              name: product.name,
              image: product.image,
              // Add other product details as needed
            },
          });
        }
  
        // Update the cartItems in Local Storage after dispatching the action
        Cookie.set('cartItems', JSON.stringify(getState().cart.cartItems));
      } else {
        console.error('Product not found in data.js');
      }
    } catch (error) {
      // Handle errors if necessary
      console.error('Error adding to cart:', error);
    }
  };


const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  // Update the cartItems in Local Storage after dispatching the action
  const { cart: { cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};

const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};

export { addToCart, removeFromCart, saveShipping };
