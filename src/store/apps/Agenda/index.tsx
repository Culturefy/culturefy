import { createSlice } from '@reduxjs/toolkit'
const initialState = []

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        add(state,action){
            state.push(action.payload)
        }
  },
})

export const {add} = counterSlice.actions
export default counterSlice.reducer