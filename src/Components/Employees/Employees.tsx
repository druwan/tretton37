import axios from "axios"
import React, { useEffect, useState } from "react"
import { Employee } from "../../types"
import Select from "react-select";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { InfoBox } from "../Employee/InfoBox";
import { ProfilePicture } from "../Employee/ProfilePicture";

const url = process.env.REACT_APP_SECRET_URL as string;
const header = process.env.REACT_APP_SECRET_HEADER as string


export const EmployeeList = () => {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [selectedOffice, setSelectedOffice] = useState('')
  
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
        setSelectedOffice(officeLocation.value)
        console.log(selectedOffice);
        
    }
    
    return (
        <div>
            <Select options={officeOptions} onChange={handleChange} className="items-center w-1/4" />

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-10">
            {
                employees.map((employee, index) => (
                    <div key={employee.name} className="max-w-xs rounded-lg shadow-lg">
                        <ProfilePicture employee={employee} />
                        <div className="grid grid-cols-2 p-4" >
                            <InfoBox key={employee.name} employee={employee} />
                            <SocialMedia key={ index } employee={employee} />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        
    )
}