import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeType } from "../../components/EmployeeList";

type EmployeeState = {
    employees: EmployeeType[],
    selectedEmployee: EmployeeType | null
}

const initialState: EmployeeState = {
    employees: [],
    selectedEmployee: null
}

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
            state.employees = action.payload;
        },
        selectEmployee: (state, action: PayloadAction<EmployeeType>) => {
            state.selectedEmployee = action.payload;
        },
        deleteEmployee: (state, action: PayloadAction<number>) => {
            const updatedEmployees = state.employees.filter(emp => emp.id !== action.payload);
            const currentEmployeeIndex = state.employees.findIndex(emp => emp.id === action.payload);

            state.employees = updatedEmployees;

            if (state.selectedEmployee && state.selectedEmployee.id === action.payload) {
                //index of next employee
                const nextEmployeeIndex = currentEmployeeIndex < updatedEmployees.length
                    ? currentEmployeeIndex
                    : updatedEmployees.length - 1;

                // Set the next employee as the selected one
                state.selectedEmployee = updatedEmployees[nextEmployeeIndex] || null;
            }
        },
        addEmployee: (state, action: PayloadAction<EmployeeType>) => {
            const newEmployee = action.payload
            newEmployee.id = state.employees.reduce((maxId, emp) => Math.max(maxId, emp.id), 0) + 1;
            state.employees.push(newEmployee)
        }
    }
})

export const { setEmployees, deleteEmployee, selectEmployee, addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
