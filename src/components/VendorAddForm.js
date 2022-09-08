import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VendorAddForm = ({ addVendor }) => {

    const url = "http://localhost:9292/vendors";
    
    const [formData, setFormData] = useState({
        name:"",
        booth_number:"",
        // cuisine_id:"",
        cuisine_name:"",
        comment:""        
    });

    const navigate = useNavigate();

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
            // cuisine_id:"",
            cuisine_name:"",
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
        
        navigate('/vendors');
        
    }

    return (
        <div id="form">
            <h3>Vendor Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Vendor Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br/>
                <label>Booth Number: </label>
                <input type="text" name="booth_number" value={formData.booth_number} onChange={handleChange} required /><br/>
                <label>Cuisine Name: </label>
                <input type="text" name="cuisine_name" value={formData.cuisine_name} onChange={handleChange} required /><br/>
                <label>Comment: </label>
                <textarea type="text" name="comment" value={formData.comment} onChange={handleChange} required /><br/>
                <button type="submit">Add Vendor</button>
            </form>
        </div>
    )
}

export default VendorAddForm