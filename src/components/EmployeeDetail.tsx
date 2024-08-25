import { useSelector } from "react-redux"
import { RootState } from "../store/store"



function EmployeeDetail() {

    const selectedEmployee = useSelector((state: RootState) => state.employees.selectedEmployee);

    if (!selectedEmployee) {
        return <div className=" w-[70vw] m-auto flex flex-col items-center text-white text-3xl font-semibold">
            Welcome to Employee Management System.
        </div>
    }
    return (
        <>
            <div className="bg-blue-400 w-[70vw] m-auto flex flex-col items-center gap-2 py-3 rounded-3xl " key={selectedEmployee.id}>
                <img src={selectedEmployee.photo_url ? selectedEmployee.photo_url : "https://as2.ftcdn.net/v2/jpg/07/61/57/77/1000_F_761577759_kNs7KVw2JL8i9g19ZPB0FhuDydLQ0md6.jpg"}  className="w-[10vw] cover rounded-xl "/>
                <p>Name: {selectedEmployee.name}</p>
                <p>id:{selectedEmployee.id}</p>
                <p>Age: {selectedEmployee.age}</p>
                <p>Position in Company: {selectedEmployee.position}</p>
            </div>
        </>
    )
}

export default EmployeeDetail