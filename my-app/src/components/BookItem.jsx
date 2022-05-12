import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import BooksContext from '../context/BooksContext'


function BookItem({item}) {
  const {deleteBook, editBook} = useContext(BooksContext)


  

  return (
    <Card className="card" >
            <div className="rating">
                <p className= "p">{item.rating}</p>
            </div>
            <div className="book-info">
                <div className="title">{item.title}</div>
                <div className="author">{item.author}</div>
            </div>
            <div className="close">
            <button  
              onClick={() => deleteBook(item.id)}  
              className="delete-button">
              <FaTimes  />
            </button>
            <button
                onClick={() => editBook(item)}
                className='edit'>
                <FaEdit />
            </button>
            </div>
    </Card>
  )
}

BookItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default BookItem