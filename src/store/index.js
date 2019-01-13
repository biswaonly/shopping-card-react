import { createStore } from 'redux';
import PostData from '../data/products.json';

const initialState={
  sizes : ["XS","S","M","ML","L","XL","XXL"],
  data : [...PostData],
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
      default:
          return state
  }
}

const store = createStore(reducer);

export default store;