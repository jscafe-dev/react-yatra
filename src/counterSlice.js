import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counterValue: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counterValue += 1
        },
        decrement: (state) => {
            state.counterValue -= 1
        },
        incByAmount: (state, action) => {
            console.log(state.counterValue)
            console.log(action)
            state.counterValue += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incByAmount } = counterSlice.actions

export default counterSlice.reducer