import {useState} from "react";

function BookCreate({onCreate}){
    const [tittle, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(tittle);
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