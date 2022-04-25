import axios from "axios"
import React, { useEffect, useState } from "react"
import { Employee } from "../../types"




const url = process.env.REACT_APP_SECRET_URL as string;
const header = process.env.REACT_APP_SECRET_HEADER as string



export const EmployeeList = () => {
    const [employees, setEmployees] = useState<Employee[]>([])
  
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

    return (
        <div>
            <h1 className="font-bold text-4xl">Wall of Ninjas</h1>
            <div className="grid gap-4 grid-cols-4">
            {
                employees.map((employee, index) => (
                    <div key={employee.name} className="max-w-xs rounded-lg shadow-lg">
                        <img key={employee.imagePortraitUrl} className="w-auto h-fit pt-4" src={`${employee.imagePortraitUrl}`} alt={`img of ${employee.name}`} />
                        <div className="grid grid-cols-2 p-4" >
                            <div key={employee.name} className="grid grid-rows-2 grid-flow-col text-left">
                                <div>{employee.name} </div>
                                <div>Office: {employee.office}</div>
                            </div>
                            <div key={index} className="text-right">
                                {employee.gitHub} {employee.linkedIn} {employee.twitter}
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        
    )
}