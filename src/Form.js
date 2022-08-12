import React, { useState } from 'react'

const Form = ({addVendor}) => {

    const [formData, setFormData] = useState({
        vendorName:"",
        boothNumber:"",
        cuisineId:"",
        comment:"",        
    })

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //reset form
        setFormData({
            vendorName:"",
            boothNumber:"",
            cuisineId:"",
            comment:"",  
        })
        addVendor()
    }


    return (
        <div id="form">
            <h3>Vendor Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Vendor Name: </label>
                <input type="text" name="vendorName" value={formData.vendorName} onChange={handleChange} /><br/>
                <label>Booth Number: </label>
                <input type="text" name="boothNumber" value={formData.boothNumber} onChange={handleChange} /><br/>
                <label>Cuisine ID: </label>
                <input type="text" name="cuisineId" value={formData.cuisineId} onChange={handleChange} /><br/>
                <label>Comment: </label>
                <input type="text" name="comment" value={formData.comment} onChange={handleChange} /><br/>
                <button type="submit">Add Vendor</button>
            </form>
        </div>
    )
}

export default Form