import { useContext } from 'react';
import BookItem from './BookItem';
import BooksContext from '../context/BooksContext';


function BookList({handleSubmit}) {
    const {books} = useContext(BooksContext);


   // books = books.sort(function compare (a,b) {
   //     return b.rating - a.rating;
   // })

  if(!books || books.length === 0){
      return <p>No Books in Here!</p>
  }

    return (
    <div className='book-list'>
        {books.map((item) => (
         <BookItem 
         key={item.id} 
         item={item}
         handleSubmit={handleSubmit}
        />
        ))}
    </div>
    )         
}



export default BookList