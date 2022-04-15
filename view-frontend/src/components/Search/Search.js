import React, {useContext, useState} from 'react';
import Button from "react-bootstrap/Button";
import {BookContext} from "../../App";

const Search = () => {

    const [setContextBooks] = useContext(BookContext)
    const [bookName, setBookName] = useState("")

    const handleBlur = (event) => {
        setBookName(event.target.value)
    }

    const handleSubmit = (event) => {
        fetch('https://localhost:4200/api/books?name='+bookName)
            .then(res => res.json())
            .then(data => setContextBooks(data.books))
            .catch(err => console.log(err))
    }

    return (
        <div className="input-group w-50 ml-auto mr-auto mt-5 mb-5" style={{margin: '0 auto!important'}}>
            <input type="text" name="hi" onBlur={handleBlur} className="form-control" placeholder="Search Plants"/>
            <div className="input-group-append">
                <Button onClick={handleSubmit} className="pl-5 pr-5" variant="success"><strong>Search</strong></Button>
            </div>
        </div>
    );
};

export default Search;