import { configureStore } from "@reduxjs/toolkit"
import employeeSlice from "./slices/employeeSlice"

const store =configureStore({
    reducer: {
        employees:  employeeSlice,  // key should match slice name
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store