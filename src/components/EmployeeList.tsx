import { useEffect } from "react"
import { selectEmployee, setEmployees } from "../store/slices/employeeSlice"
import SingleEmployee from "./Employee"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"


export type EmployeeType = {
    id: number,
    name: string,
    photo_url: string,
    age: number,
    position: string
}

function EmployeeList() {
    const dispatch = useDispatch()
    const employees = useSelector((state: RootState) => state.employees.employees)


    const getEmployee = async () => {
        try {
            const res = await fetch("./employees.json")
            if (!res.ok) {
                throw new Error("Failed to fetch data")
            }
            const data = await res.json();
            dispatch(setEmployees(data.employees));
        } catch (error) {
            console.log('Error in fetching data', error);
        }
    }

    useEffect(() => {
        getEmployee()
    }, [employees])

    const handleEmployeeClick = (employee: EmployeeType) => {
        dispatch(selectEmployee(employee))
    }

    return (
        <div className="overflow-y-auto max-w-md p-5">
            <ul className="flex flex-col gap-3">
                {employees && employees.map((emp, index) => (
                    <SingleEmployee id={emp.id} name={emp.name} key={index} selectEmployee={() => handleEmployeeClick(emp)} />
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList

