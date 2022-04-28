import { Employee } from '../../types'

export const InfoBox = ({ employee }: {employee: Employee}) => {
  return(
    <div className="col-span-3 text-left text-13Blue">
      <p>{employee.name}</p><br/><p>Office: {employee.office}</p>
    </div>
  )
}