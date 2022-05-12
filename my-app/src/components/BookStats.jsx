import { FaRulerCombined } from "react-icons/fa";
import Card from "./shared/Card";
import {useContext} from 'react'
import BooksContext from "../context/BooksContext";


function BookStats() {
  const {books} = useContext(BooksContext)


  var average = books.reduce((acc, cur) => {
      return acc + cur.rating
  }, 0) / books.length;

  average = average.toFixed(1)


    return (
    <div className="book-stats">
        <h4>Total Books: {books.length}</h4>
        <h4>Average Rating: {average}</h4>
    </div>
  )
}

export default BookStats