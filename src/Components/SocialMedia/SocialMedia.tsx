import { faGithub, faLinkedin, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface mediaProps {
    linkedIn: string,
    gitHub: string,
    twitter: string
    stackOverflow: string
}


export const SocialMedia = ({gitHub, linkedIn, twitter, stackOverflow}: mediaProps) => {
    return (
        <div className="text-right mx-1">
            <span>
                {linkedIn && <a href={`https://www.linkedin.com${linkedIn}`}><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>}&nbsp;
                {gitHub && <a href={`https://www.github.com/${gitHub}`}><FontAwesomeIcon icon={faGithub} size="lg"/></a>}&nbsp;
                {twitter && <a href={`https://www.twitter.com/${twitter}`}><FontAwesomeIcon icon={faTwitter} size="lg"/></a>}&nbsp;
                {stackOverflow && <a href={`https://www.stackoverflow.com/users/${stackOverflow}`}><FontAwesomeIcon icon={faStackOverflow} size="lg"/></a>}
            </span>
        </div>
    )
}