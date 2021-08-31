import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

const defaultState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

// For better understanding on how reducer(s) operate, the following comments describe each action within reducer.
export const reducer = (state=defaultState, action) => {
  switch (action.type) {

    // If value = UPDATE_PRODUCTS, then update to reflect change.
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    // If value = ADD_TO_CART, then update to reflect change.
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
    
    // If value = ADD_MULTIPLE_TO_CART, then update to reflect change.
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    
    // If value = UPDATE_CART_QUANTITY, then update to reflect change.
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    
    // If value = REMOVE_FROM_CART, then update to reflect change.
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    // If value = CLEAR_CART, then update to reflect change.
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    // If value = TOGGLE_CART, then update to reflect change.
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    
    // If value = UPDATE_CATEGORIES, then update to reflect change.
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    // If value = UPDATE_CURRENT_CATEGORY, then update to reflect change.
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // If none of the above apply, then no update.
    default:
      return state;
  }
};

export default reducer;