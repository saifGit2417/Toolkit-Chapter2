import { createAction, createReducer } from "@reduxjs/toolkit"

export const increment =createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')
const initialState={
    rewards:101
}
const rewardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.rewards++
        })
        .addCase(incrementByAmount, (state, action) => {
            state.rewards+=action.payload
        })
})


export default rewardReducer;