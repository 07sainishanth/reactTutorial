import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([])

    const editBookById = (id, title) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title}
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    const handleBookCreate = (title) => {
        setBooks([...books, {id:Math.floor(Math.random()*1000),  title: title}]);
    }
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList
            books={books}
            onDelete={deleteBookById}
            onEdit={editBookById}
            />
            <BookCreate
                onCreate={handleBookCreate}
            />
        </div>
    )
}
export default App;