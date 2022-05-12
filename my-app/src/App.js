import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header  from "./components/Header"
import BookList from "./components/BookList"
import BookStats from "./components/BookStats"
import './index.css'
import BookEntryForm from "./components/BookEntryForm"
import About from './pages/About'
import { BooksProvider } from './context/BooksContext'
import Details from './components/Details'
import AboutIconLink from './components/AboutIconLink'

function App () { 

    return (
        <BooksProvider>
        <Router>
        <div className="App">
            <Header className="header" />
            <div className="container">
                <Routes>
                    <Route 
                        exact 
                        path='/' 
                        element={
                        <> 
                            <BookEntryForm />
                            <BookStats />
                            <BookList/>
                        </>
                        }
                    ></Route>
                </Routes>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </div>

            <AboutIconLink />
        </div>
        </Router>
        </BooksProvider>
    )
}

export default App