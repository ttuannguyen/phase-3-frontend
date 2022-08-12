import React, { useState } from 'react'

const Form = () => {
    const [vendorName, setVendorName] = useState("");
    const [boothNumber, setBoothNumber] = useState("");
    const [comment, setComment] = useState("");
    const [cuisineId, setCuisineId] = useState("");

    const handleSubmit = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <h3>Vendor Form</h3>
            <form>
                <label>Vendor Name: </label>
                <input 
                    type="text" 
                    name="vendorName" 
                    value={vendorName}
                    onChange={e => setVendorName(e.target.value)}
                /><br/>
                <label>Booth Number: </label>
                <input 
                    type="text" 
                    name="boothNumber" 
                    value={boothNumber}
                    onChange={e => setBoothNumber(e.target.value)}
                /><br/>
                <label>Comment: </label>
                <input 
                    type="text" 
                    name="comment" 
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                /><br/>
                <label>Cuisine ID: </label>
                <input 
                    type="text" 
                    name="cuisineId" 
                    value={cuisineId}
                    onChange={e => setCuisineId(e.target.value)}
                /><br/>
                <button type="submit" onSubmit={handleSubmit}>Add Vendor</button>
            </form>
        </div>
    )
}

export default Form