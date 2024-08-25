import EmployeeList from '../components/EmployeeList'
import EmployeeDetail from '../components/EmployeeDetail'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="flex w-full p-10 justify-between">
        <h1 className="text-3xl">Hello, admin</h1>
        <button className="max-w-sm bg-blue-600 p-4 rounded-lg text-white" >
          <Link to="/add-employee">Add Employee</Link>
        </button>
      </div>
      <div className='max-w-full m-auto p-5 flex justify-between bg-slate-600 max-h-[65vh]  contain'>
        <EmployeeList />
        <EmployeeDetail />
      </div>
    </>
  )
}

export default Home