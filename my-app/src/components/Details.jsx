import {useParams} from 'react-router-dom'

function Details() {
    const params = useParams()

  return (
    <div>
        <h1 className='details' >Post {params.id}</h1>
    </div>
  )
}

export default Details