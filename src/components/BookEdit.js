import React from "react";
import { useState } from "react";

function BookEdit( {book, onEdit, onSubmit} ){

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }

    return <form  onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input onChange = {handleChange} value = {title} className="input"/>
        <button className="button is-primary">
            save
        </button>
    </form>
}

export default BookEdit;