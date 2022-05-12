import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function About() {
  return (
        <div className="about">
            <Card> 
              <p></p>
              <p>This is my about page. I made this project to keep track of all my books and to rate them in terms of their importance to me. Perhaps you too would like to do such a thing.</p>
            </Card>
            <p>
                <Link to="/">Back to The List</Link>
            </p>
        </div>
  )
}

export default About