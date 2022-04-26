import { Employee } from "../../types"

export const InfoBox = ({employee}: {employee: Employee}) => {
    return(
        <div className="grid grid-rows-2 grid-flow-col text-left">
            <div>{employee.name} </div>
            <div>Office: {employee.office}</div>
        </div>
    )
}