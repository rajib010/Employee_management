import { Link, useNavigate } from "react-router-dom"
import InputField from "../components/InputField";
import { addEmployee } from "../store/slices/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

function AddEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees.employees)


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = data.get("username") as string;
    const age = parseInt(data.get('age') as string, 10);
    const photo_url = data.get("imgurl") as string;
    const position = data.get("position") as string;



    const newEmployee = {
      id: 0,
      name,
      age,
      photo_url,
      position
    }

    dispatch(addEmployee(newEmployee))
    alert("Employee added successfully")
    navigate("/");
  }

  return (
    <div className="w-[90vw] m-auto mt-10">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Add New Employee Information</h1>
        <button className="max-w-md bg-blue-600 text-white p-4 rounded-xl"><Link to='/'>{`<- Home`}</Link></button>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full border border-black items-center shadow-2xl mt-4 rounded-3xl p-4">
          <InputField name="username" type="text" placeholder="Enter your name" />
          <InputField name="age" type="number" placeholder="Your age" />
          <InputField name="imgurl" type="text" placeholder="Your profile pic url" />
          <InputField name="position" type="text" placeholder="What is your position ?" />
          <button type="submit" className="w-[20vw] p-4 rounded-lg text-xl bg-blue-500 text-white">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee