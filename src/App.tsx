import { EmployeeList } from './Components/Employees/Employees';
import './App.css';


const App = () => { 
  return (
    <div className='App'>
      <h1 className="font-bold text-4xl">Wall of Ninjas</h1>
      <EmployeeList />
    </div>
  );
}

export default App;
