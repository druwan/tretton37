import { Employee } from '../../types'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import { InfoBox } from './InfoBox'
import { ProfilePicture } from './ProfilePicture'

export const EmployeeCard = ({ employees }: {employees: Employee[]}) => {
  return(
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-10">
      {
        employees.map((employee, index) => (
          <div key={employee.name} className="max-w-xs rounded-lg shadow-lg bg-white">
            <ProfilePicture employee={employee} />
            <div className="grid grid-cols-5 p-4 bg-white rounded-lg" >
              <InfoBox key={employee.name} employee={employee} />
              <SocialMedia key={ index } employee={employee} />
            </div>
          </div>
        ))
      }
    </div>
  )
}