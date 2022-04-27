import axios from "axios"
import React, { useEffect, useState } from "react"
import { Employee } from "../../types"
import Select from "react-select";
import { EmployeeCard } from "../Employee/EmployeeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";

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

    const handleSelect = (officeLocation: any) => {  
        setFilterEmployees(employees.filter(employee => employee.office === officeLocation.value))
    }
    // .join('').toLowerCase().includes(searchEmployees.toLowerCase())
    const handleSearch = (searchEmployees: string) => {
        const searchResult = employees.filter((employee) => {
            return Object.values(employee.name).join('').toLowerCase().includes(searchEmployees.toLowerCase())
        })
        setFilterEmployees(searchResult);
                
    }

    return (
        <div>
            <div className="p-10 flex justify-evenly">
                <div className="flex flex-wrap items-stretch">
                    <input type="search" placeholder="Search Employees" aria-label="Search" onChange={(e) => handleSearch(e.target.value)} className="form-input block rounded-md border-gray-300 w-3/4" />
                    <div>
                        <FontAwesomeIcon icon={faSistrix} size="2x" transform="down-2 right-1" />
                    </div>    
                </div>
                <div className="flex">
                    <Select options={officeOptions} onChange={handleSelect} className="" placeholder="Select Office" />
                    <button onClick={() => setFilterEmployees(employees)} className="rounded-full bg-13Green/100" >Clear filter</button>
                </div>
            </div>
            <EmployeeCard employees={filterEmployees} />
        </div>
    )
}