import Card from "./shared/Card"
import {useState, useContext, useEffect} from 'react'
import Button from "./Button";
import BooksContext from "../context/BooksContext";

function BookEntryForm({handleAdd}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(''); 
    const [isDisabled, setIsDisabled] = useState()

    const {addBook, bookEdit, updateBook} = useContext(BooksContext)
    
    useEffect(() => {
        if(bookEdit.edit === true){
            setRating(bookEdit.item.rating)
            setTitle(bookEdit.item.title)
            setAuthor(bookEdit.item.author)
            setIsDisabled(false)
        }
    }, [bookEdit])

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (rating > 0 && rating < 100 && author.length !== 0){
            setIsDisabled(false);
        }
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
        if (rating > 0 && rating < 100 && title.length !== 0){
            setIsDisabled(false);
        }
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
        if (title.length !== 0 && author.length !== 0){
            setIsDisabled(false);
        }
    }    

    const handleSubmit = (e) => {
        e.preventDefault() 
        
        const newBook = {
            title,
            author,
            rating: parseFloat(rating)
        }

        if(bookEdit.edit === true) {
            updateBook(bookEdit.item.id,  newBook)
        } else {
            addBook(newBook)
        }

        setRating('')
        setAuthor('')
        setTitle('')
        setIsDisabled(true)
    }   
    
  return (
    <div className="card2">
        <header className="add-header">
            <h1 className="add-h1">Add a Book</h1>
        </header>
        <form onSubmit={handleSubmit} className="add-card inputs">
            
                <input 
                className="rating"
                onChange={handleRatingChange}
                type="number"
                placeholder="0-100" 
                value = {rating}
                />
            <div className="add-book-info">
                <input 
                className="add-title"
                onChange={handleTitleChange}
                type="text" 
                placeholder="Enter Title" 
                value = {title}
                />
                <input 
                className="add-author"
                onChange={handleAuthorChange}
                type="text" 
                placeholder="Enter Author" 
                value = {author}
                />
            </div>    
            <div className="add-button">
                <Button 
                version='secondary' 
                type='submit'
                isDisabled={isDisabled}
                >Submit</Button>
            </div>
        </form>
    </div>
  )
}

export default BookEntryForm

