import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import PostData from '../data/products.json';

const initialState={
  sizes : ["XS","S","M","ML","L","XL","XXL"],
  data : PostData,
  new_size_arr : [],
  new_grab_data : PostData,
  card_data : PostData,
  input_letters : '', 
  final_search : [],
  show_cart : false,
  count_cart_data : [],
  cart_count : 0,
  total_price : 0.00
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'ROUND_BUTTON_CLICKED':
      var setArr = [];
      if(state.new_size_arr.some(x=> {return x===action.pass})){
        let c = state.new_size_arr.indexOf(action.pass);
        state.new_size_arr.splice(c,1);
        for (let i = 0; i < state.new_size_arr.length; i++) {
          for (let j = 0; j < state.data.length; j++){
            if(state.data[j].availableSizes.indexOf(state.new_size_arr[i])>-1){
              setArr.push(state.data[j])
            }
          }
        }
        if(state.new_size_arr.length < 1){
          setArr = PostData;
        }
      }else{
        state.new_size_arr.push(action.pass);
        for (let i = 0; i < state.new_size_arr.length; i++) {
          for (let j = 0; j < state.data.length; j++) {
            if(state.data[j].availableSizes.indexOf(state.new_size_arr[i])>-1){
              setArr.push(state.data[j])
            }
          }
        }
      }
      state.new_grab_data = [...new Set(setArr)]
      return Object.assign({}, state ,{card_data : [...new Set(setArr)]});
    case 'INPUT_CHANGE':
      let primary_search = [];
      for(let i= 0; i < state.data.length; i++){
        if(action.pass === ""){
          primary_search = [];
        }
        else if((state.data[i].title.toLowerCase().includes(action.pass.toLowerCase()))){
          primary_search.push(state.data[i].title)
        }
      }
      let secondary_search =[];
      for (let i = 0; i < primary_search.length; i++) {
        if(primary_search[i].toLowerCase().indexOf(action.pass.toLowerCase())===0){
          secondary_search.push(primary_search[i])
        }
      }
      state.final_search = Array.from(new Set(secondary_search.concat(primary_search)));
      return Object.assign({}, state, {input_letters: action.pass, final_search :state.final_search});
    case 'SHOW_CART':
      return Object.assign({}, state, {show_cart : !state.show_cart})
    case 'ADD_TO_CART':
      let aa = [...state.count_cart_data];
      let pp = {...action.pass}
      let ii = -1;
      aa.find((e, i)=>{
        if(e.id === pp.id){
          ii = i;
        }
        return true;
      })
      if(ii > -1 && aa[ii].cartQuantity < (aa[ii].availableItem-1)){
        aa[ii].cartQuantity += 1;
      }
      else if(ii > -1 && (aa[ii].cartQuantity+1) === aa[ii].availableItem){
        aa[ii].cartQuantity += 1;
        state.card_data.find((e,i)=>{
          if(e.id === pp.id){
            state.card_data[i].available = false;
          }
          return true;
        })
      }
      else if(ii === -1){
        pp.cartQuantity += 1;
        aa.push(pp);
      }
      else if(ii > -1 && aa[ii].cartQuantity === aa[ii].availableItem){
      }
      return Object.assign({}, state, {count_cart_data : aa})
    case 'OPTION_CHANGE':      
      if(action.pass === "PoP"){
        let data = [...state.new_grab_data];
        return {...state, card_data:[...data]}
      }
      else if (action.pass === "L2H") {
        let b = [...state.new_grab_data];
        let data = b.sort((a, b)=> {
          return a.price - b.price;
        });
        return {...state, card_data:[...data]}
      }
      else if (action.pass === "H2L") {
        let b = [...state.new_grab_data];
        let data = b.sort((a, b)=> {
          return b.price - a.price;
        });
        return {...state, card_data:[...data]}
      }
      return {...state}
    case 'REMOVE_CART_ITEM':
      let array = [...state.count_cart_data];
      let index = -1;
      array.find((e, i)=>{
        if(e.id === action.pass.id){
          index = i;
          return true;
        }
      })
      if (index > -1) {
        return Object.assign({}, state, {count_cart_data : [...state.count_cart_data.slice(0, index),...state.count_cart_data.slice(index+1, state.count_cart_data.length)]})
      }
      return {...state};
    case 'CHANGE_ITEM_QUANTITY':
      var cc = 0;
      var vv = 0;
      let nn = [...state.count_cart_data];

      if(action.pass){
        nn.find((e, i)=>{
          if(e.id === action.pass.id){
            nn.splice(i, 1);
            return true;
          }
        })
        state.card_data.find((e, i)=>{
          if(e.id === action.pass.id){
            state.card_data[i].available = true;
            return true;
          }
        })
      }
      for (let i = 0; i < nn.length; i++) {
        cc += nn[i].cartQuantity;
        vv += (nn[i].cartQuantity * nn[i].price)
      }
      return Object.assign({}, state, {cart_count : cc, total_price : vv})
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;