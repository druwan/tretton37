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
            <h2>Create a grid of Employees</h2>
            {employees.map((employee, index) => (
                    <li key={index}>{employee.name}</li>
                ))
            }
        </div>
    )
}