import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    status: 'idle',
    message: undefined,
    productsArr: [
        {
            id:1,
            name:"lolly pop"
        },
        {
            id:2,
            name:"mmm"
        }
    ]
}

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (thunkAPI)=>{
        const response = await axios.get('http://localhost:4000/product/');
        return response.data;
    }
)

export const addProductToServer = createAsyncThunk(
    'products/addProduct',
    async (item,thunkAPI)=>{
        const response = await axios.post('http://localhost:4000/product/',item);
        return response.data;
    }
)

const productsSlice = createSlice({
    name:"ProductsInSlice",
    initialState,
    reducers:{
        addProduct:{
            reducer:(state,action)=>{
                let i = state.productsArr[state.productsArr.length-1].id;
                action.payload.id = ++i;
                state.productsArr.push(action.payload);
            }
        },
        deleteProduct:{},
        updateProduct:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchAllProducts.fulfilled,
            (state,action)=>{
                state.productsArr = action.payload;
                state.status = 'fulfilled';
        }).addCase(
            fetchAllProducts.rejected,
            (state,action)=>{
                state.status = 'rejected';
                state.message = action.payload.message;
            }
        ).addCase(
            fetchAllProducts.pending,
            (state,action)=>{
                state.status = 'pending';
            }
        ).addCase(
            addProductToServer.fulfilled,
            (state,action)=>{
                state.productsArr.push(action.payload)

                console.log("success");
            }
        )
    }
})

export const {addProduct,deleteProduct,updateProduct} = productsSlice.actions;
export default productsSlice.reducer;