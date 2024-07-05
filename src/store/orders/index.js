import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentOrder: {
        id: 1,
        date: "Oct 21,2023",
        type: "Pro Annual"    
    }
}

const order = createSlice({
    name: "order",
    initialState,
    reducers: {
        _setSelectedOrder: (state,action) => {
            state.currentOrder = action.payload
        }
    }
})

export const {_setSelectedOrder} = order.actions;
export default order.reducer