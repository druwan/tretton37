import { Employee } from '../../types'

export const ProfilePicture = ({ employee } : {employee: Employee}) => {
  if (!employee.imagePortraitUrl) {
    return (
      <img key={employee.imagePortraitUrl} className="w-fit h-fit rounded-lg" src="https://placeimg.com/320/440/tech/grayscale" alt={`placeholder for ${employee.name}`} />
    )
  }
  return(
    <img key={employee.imagePortraitUrl} className="w-fit h-fit pt-4" src={`${employee.imagePortraitUrl}`} alt={`img of ${employee.name}`} />
  )
}