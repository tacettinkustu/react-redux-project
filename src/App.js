import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import {createStore} from "redux";

const initialStore = {
  count:0,
};

function reducer(state,action){
  console.log({state,action});
  if(action.type === "DECREASE"){
    return {count:state.count-1};
  }
  return state;
};

const store = createStore(reducer,initialStore);
store.dispatch({type:"DECREASE"});
console.log(store.getState());


function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
