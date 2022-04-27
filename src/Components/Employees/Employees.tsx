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

    // Set initial filteredEmployees to employees
    useEffect(() => {setFilterEmployees(employees)},[employees])

    // Get unique office locations
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
        setFilterEmployees(employees.filter(employee => employee.office === officeLocation.value))
    }   
    
    return (
        <div>
            <div className="flex">
                <Select options={officeOptions} onChange={handleChange} className="items-center w-1/4" placeholder="Select Office" />
                <button onClick={() => setFilterEmployees(employees)}>Clear filter</button>
            </div>
            <EmployeeCard employees={filterEmployees} />
        </div>
    )
}