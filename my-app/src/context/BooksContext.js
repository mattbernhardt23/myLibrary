import { createContext, useState, useEffect } from "react";


const BooksContext = createContext()

export const BooksProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([])
    const [bookEdit, setBookEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchBooks();    
    }, [])


    // Fetch feedback
    const fetchBooks = async () => {
        const response = await fetch('/books?_sort=rating&_order=desc');
        const data = await response.json();
        setBooks(data);
        setIsLoading(false)
    } 


    const editBook = (item) => {
        setBookEdit({
            item: item,
            edit: true,
        })
    }

    const updateBook = async (id, updItm) => {
        const response = await fetch(`/books/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItm)
        })

        const data = await response.json()

        setBooks(
            books.map((item) => (item.id === id ? {
            ...item, ...data
        } : item))
        )

        setBookEdit(false)
    }
   

    const deleteBook = async (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            await fetch(`/books/${id}`, {method: 'DELETE' })
            setBooks(books.filter((item) => item.id !== id))
        }
    }

    const addBook = async (newBook) => {
        const response = await fetch('/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook),
        })
        const data = await response.json()
        setBooks([data, ...books])
     }

    return <BooksContext.Provider value={{
        books,
        bookEdit,
        isLoading,
        deleteBook,
        addBook,
        editBook,
        updateBook,
    }}>
        {children}
    </BooksContext.Provider>
}

export default BooksContext