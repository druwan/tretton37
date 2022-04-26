import axios from "axios"
import React, { useEffect, useState } from "react"
import { Employee } from "../../types"
import Select from "react-select";
import { EmployeeCard } from "../Employee/EmployeeCard";

const url = process.env.REACT_APP_SECRET_URL as string;
const header = process.env.REACT_APP_SECRET_HEADER as string


export const EmployeeList = () => {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [filterEmployees, setFilterEmployees] = useState(employees)
     
    useEffect(() => {
        const fetchEmployees = async () => {
        const headers = {
            'Authorization': `${header}`
        }
        await axios.get(url, { headers })
            .then(res => {
                setEmployees(res.data)
            })
            .catch(err => console.log(err))
        }
        fetchEmployees()
    }, [])

    // const officeLocations = (new Set(employees.map(employee => employee.office)))
    // Hardcoding it...
    const officeOptions = [
        { value: "Borlänge", label: "Borlänge" },
        { value: "Helsingborg", label: "Helsingborg" },
        { value: "Ljubljana", label: "Ljubljana" },
        { value: "Lund", label: "Lund" },
        { value: "Stockholm", label: "Stockholm" },
        { value: "Öresund", label: "Öresund" },
        { value: null, label: "No Office" },
    ]

    const handleChange = (officeLocation: any) => {   
        // If no option -> show all employees   
        setFilterEmployees(employees)
        setFilterEmployees(employees.filter(employee => employee.office === officeLocation.value))
    }
    
    return (
        <div>
            <div>
                <Select options={officeOptions} onChange={handleChange} className="items-center w-1/4" defaultValue={null}/>
                <button>hej</button>
            </div>
            <EmployeeCard employees={filterEmployees} />
        </div>
    )
}