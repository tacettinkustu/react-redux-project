import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTAL } from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };

    case DECREASE:
      let temppCart = [];
      if (action.payload.amount === 1) {
        temppCart = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        temppCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
      }
      return { ...state, cart: temppCart };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case GET_TOTAL:
      let { total, amount } = state.cart.reduce((cartTotal,cartItem) => {
        const {price,amount} = cartItem;
        const itemTotal = price*amount;
        cartTotal.total += itemTotal;
        cartTotal.amount+=amount;
        return cartTotal;
      }, {
        total: 0,
        amount: 0,
      });
      total = parseFloat(total.toFixed(2));
      return{...state,total,amount};
    default:
      return state;
  }
}

export default reducer;
