import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate(){
    const [tittle, setTitle] = useState('');
    const { handleBookCreate } = useBooksContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleBookCreate(tittle);
        setTitle('')
    }

    const handleChange = (e) => {

        setTitle(e.target.value);
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Tittle:</label>
                <input className="input" value={tittle} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;