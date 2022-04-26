import { faGithub, faLinkedin, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Employee } from "../../types"

export const SocialMedia = ({employee}: { employee: Employee}) => {    
    return (
        <div className="text-right mx-1">
            <span>
                {employee.linkedIn && <a href={`https://www.linkedin.com${employee.linkedIn}`}><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>}&nbsp;
                {employee.gitHub && <a href={`https://www.github.com/${employee.gitHub}`}><FontAwesomeIcon icon={faGithub} size="lg"/></a>}&nbsp;
                {employee.twitter && <a href={`https://www.twitter.com/${employee.twitter}`}><FontAwesomeIcon icon={faTwitter} size="lg"/></a>}&nbsp;
                {employee.stackOverflow && <a href={`https://www.stackoverflow.com/users/${employee.stackOverflow}`}><FontAwesomeIcon icon={faStackOverflow} size="lg"/></a>}
            </span>
        </div>
    )
}