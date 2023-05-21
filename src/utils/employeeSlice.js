// imports

import { createSlice } from "@reduxjs/toolkit";

// initial state

const initialState = {
    employee: [],
}


// slice

const employeeSlice = createSlice({
    name: 'employee',
    initialState:initialState,
    reducers: {
        addEmployee:(state, action) => {
            state.employee.push(action.payload)
        },
        // remove one employee from the state
        removeEmployee:(state, action) => {
            state.employee.splice(action.payload, 1)
        }
    },                                                                                              
})

export const { addEmployee } = employeeSlice.actions
export const { removeEmployee } = employeeSlice.actions
export default employeeSlice.reducer