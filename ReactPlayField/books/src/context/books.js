import {createContext, useCallback, useState} from 'react';
import axios from "axios";


const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get(`http://localhost:3001/books`);
        setBooks(response.data);
    }, [])



    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title});
        if (response.status === 200) {
            await fetchBooks()
        }
    }

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        if (response.status === 200) {
            await fetchBooks()
        }
    }

    const handleBookCreate = async (title) => {
        const response = await axios.post('http://localhost:3001/books/', {title})
        // setBooks([...books, response.data]);
        if (response.status === 201) {
            await fetchBooks()
        }
    }

    const props = {
        books,
        fetchBooks,
        editBookById,
        deleteBookById,
        handleBookCreate,
    }


    return <BooksContext.Provider value={props}>{children}</BooksContext.Provider>
}

export default BooksContext;

export { Provider };