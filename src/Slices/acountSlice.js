import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    amount: 1,
}


export const getUserAcount = createAsyncThunk(
    'acount/getUser',
    async (id, thunkAPI) => {
        const {data} = await axios.get(`http://localhost:8080/acounts/${id}`)
        return data.amount
    }
)
export const acountSlice = createSlice({
    name: 'acount',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getUserAcount.fulfilled,(state,action)=>{
            state.amount=action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = acountSlice.actions

export default acountSlice.reducer