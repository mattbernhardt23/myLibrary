import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
    return (
        <div className="about-link">
            <div className="question-mark">
            <Link to='/about' >
                <FaQuestion size={30} />
            </Link>
            </div>    
        </div>
    )
} 
  

export default AboutIconLink