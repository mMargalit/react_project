import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";




const initialState = {
    details:null,
    productsInCart:[]
}

const ordersSlice = createSlice({
    name:"ordersInSlice",
    initialState,
    reducers:{
        addToCart:{
            reducer: (state, action) => {
                let p = false;
                state.productsInCart.map((item)=>{
                    if(item.id === action.payload.id) {
                        item.qty++;
                        p = true;
                }})
                if (!p){
                    state.productsInCart.push({...action.payload,qty:1})
                }
            }
        },
        removeFromCart:{
            reducer:(state,action)=>{
                state.productsInCart = state.productsInCart.filter(item=>item.id!==action.payload.id);
            }
        },
        removeOne:{
            reducer: (state,action)=>{
                state.productsInCart.map((item)=>{
                    if(item.id === action.payload.id){
                        if(item.qty>1){
                            item.qty=item.qty-1;
                        }else{
                            state.productsInCart = state.productsInCart.filter(item=>item.id!==action.payload.id);
                        }
                    }
                })
            }
        }
    }
})

export const {addToCart, removeFromCart, removeOne} = ordersSlice.actions;
export default ordersSlice.reducer;