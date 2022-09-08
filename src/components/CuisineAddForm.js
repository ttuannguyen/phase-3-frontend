import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CuisineAddForm = ({ addCuisine }) => {

    const url = 'http://localhost:9292/cuisines';
    
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //reset form
        setName('')

        const nameObj = {name: name}

        fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(nameObj),
          })
          .then(res => res.json())
          .then(newCuisine => {
            addCuisine(newCuisine)
          })
        // console.log(nameObj)

        navigate('/cuisines');
    }

    
    return (
        <div>
            <h3>Add Cuisine</h3>
            <form onSubmit={handleSubmit}>
                <label>Cuisine Name: </label>
                <input type='text' name='name' value={name} onChange={handleChange} required />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default CuisineAddForm