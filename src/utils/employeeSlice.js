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
        removeEmployee:(state, action) => {
            state.employee = state.employee.filter((employee) => employee.id == action.payload)
        }
    },                                                                                              
})

export const { addEmployee } = employeeSlice.actions
export const { removeEmployee } = employeeSlice.actions
export default employeeSlice.reducer