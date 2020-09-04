import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case INCREASE:
      return;
    case DECREASE:
      return;
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default reducer;
