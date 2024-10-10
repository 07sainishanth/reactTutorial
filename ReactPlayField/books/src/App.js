import {useEffect, useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async () => {
        const response = await axios.get(`http://localhost:3001/books`);
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title});
        if (response.status === 200) {
            fetchBooks()
        }
    }

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        if (response.status === 200) {
            fetchBooks()
        }
    }

    const handleBookCreate = async (title) => {
        const response = await axios.post('http://localhost:3001/books/', {title})
        // console.log(response)
        setBooks([...books, response.data]);

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