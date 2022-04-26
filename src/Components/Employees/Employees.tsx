import axios from "axios"
import React, { useEffect, useState } from "react"
import { Employee } from "../../types"
import Select from "react-select";
import { SocialMedia } from "../SocialMedia/SocialMedia";

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
                        { 
                            (employee.imagePortraitUrl === null)
                                ?   <img key={employee.imagePortraitUrl} className="w-fit h-fit pt-4" src="https://placeimg.com/320/440/tech/grayscale" alt={`placeholder for ${employee.name}`} />
                                :   <img key={employee.imagePortraitUrl} className="w-fit h-fit pt-4" src={`${employee.imagePortraitUrl}`} alt={`img of ${employee.name}`} /> 
                        }
                        <div className="grid grid-cols-2 p-4" >
                            <div key={employee.name} className="grid grid-rows-2 grid-flow-col text-left">
                                <div>{employee.name} </div>
                                <div>Office: {employee.office}</div>
                            </div>
                            <SocialMedia key={ index } gitHub={ employee.gitHub } linkedIn={ employee.linkedIn } twitter={ employee.twitter } stackOverflow={ employee.stackOverflow } />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        
    )
}