import React, { useState } from 'react'

const Form = ({addVendor}) => {

    const url = "http://localhost:9292/vendors";
    
    const [formData, setFormData] = useState({
        name:"",
        booth_number:"",
        cuisine_id:"",
        comment:"",        
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //reset form
        setFormData({
            name:"",
            booth_number:"",
            cuisine_id:"",
            comment:"",  
        })

        fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(res => res.json())
          .then(newVendor => {
            addVendor(newVendor)
          })
    }

    return (
        <div id="form">
            <h3>Vendor Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Vendor Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} /><br/>
                <label>Booth Number: </label>
                <input type="text" name="booth_number" value={formData.booth_number} onChange={handleChange} /><br/>
                <label>Cuisine ID: </label>
                <input type="text" name="cuisine_id" value={formData.cuisine_id} onChange={handleChange} /><br/>
                <label>Comment: </label>
                <input type="text" name="comment" value={formData.comment} onChange={handleChange} /><br/>
                <button type="submit">Add Vendor</button>
            </form>
        </div>
    )
}

export default Form