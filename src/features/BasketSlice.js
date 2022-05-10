import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCard: (state, action) => {  
      const findProduct = state.data.find(item => item.id === action.payload.id);
      if(findProduct){
        findProduct.amount +=1;
        const newPayload = {...action.payload, amount:findProduct.amount}
        state = {...state,data:[...state.data.filter(item => item.id != action.payload.id),newPayload]}
      }else{
        
        const firstPayload = {...action.payload,amount:1}
        return {...state, data:[...state.data,firstPayload]} 
      } 
         },

    removeFromCard: (state, action) => {  
      return {...state, data:[...state.data.filter(item => item.id != action.payload.id)]} 
      },

    removeAmount:(state,action)=>{

      if(action.payload.amount == 1){
        return {...state, data:[...state.data.filter(item => item.id != action.payload.id)]} 
      }else{
        const newAmount = action.payload.amount-1
        const payloadNewAmount = {...action.payload,amount:newAmount}
        return {...state, data:[...state.data.filter(item => item.id != action.payload.id),payloadNewAmount]} 
      }
     
    }, 
    },
  
});

export default BasketSlice.reducer;
export const { addToCard,removeFromCard,removeAmount } = BasketSlice.actions;