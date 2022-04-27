import { EmployeeList } from './Components/Employees/Employees';
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';


const App = () => { 
  return (
    <div className='App bg-13Pink'>
      <NavBar />
      <EmployeeList />
    </div>
  );
}

export default App;
