import { useDispatch } from "react-redux"
import { deleteEmployee } from "../store/slices/employeeSlice"


type EmployeeProps = {
    id: number,
    name: string,
    selectEmployee: () => void
}

function Employee({ id, name, selectEmployee }: EmployeeProps) {

    const dispatch = useDispatch()
    const handleDeleteEmployee = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(deleteEmployee(id))
        
    }
    return (
        <div key={id} className="flex w-[20vw] justify-between" >
            <li className="w-full border border-b-2 px-5 list-none cursor-pointer text-white" onClick={selectEmployee}>{name}</li>
            <button className="w-[3vw] bg-slate-100" onClick={(e) => handleDeleteEmployee(id, e)}>❌</button>
        </div>
    )
}

export default Employee