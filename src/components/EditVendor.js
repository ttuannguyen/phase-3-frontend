import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditVendor = () => {

  const [vendor, setVendor] = useState([]);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name:"",
    booth_number:"",
    cuisine_id:"",
    comment:"",        
  });

  // fetch request and re-rendering a specific vendor
  useEffect(() => {
    fetch(`http://localhost:9292/vendors/${id}`)
      .then(res => res.json())
      .then(vendor => {
        console.log(vendor)
        setFormData(vendor)
      })
  }, [id]);

  console.log(formData)

  
  const handleChange = (e) => {
    setFormData(formData => {
        return {...formData, [e.target.name]:e.target.value}
    })
  };


  // PATCH fetch request 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }


  return (
    <div id="form">
    <h3>Vendor Form</h3>
    <p>trying to put name here</p>
    <form onSubmit={handleSubmit}>
        <label>Vendor Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
        <label>Booth Number: </label>
        <input type="text" name="booth_number" value={formData.booth_number} onChange={handleChange}/><br/>
        <label>Cuisine ID: </label>
        <input type="text" name="cuisine_id" value={formData.cuisine_id} onChange={handleChange}/><br/>
        <label>Comment: </label>
        <input type="text" name="comment" value={formData.comment} onChange={handleChange}/><br/>
        <button type="submit">Edit</button>
    </form>
</div>
  )
}

export default EditVendor