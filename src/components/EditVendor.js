import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditVendor = ({ editVendor }) => {

  const { id } = useParams();
  const navigate = useNavigate();

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
        // console.log(vendor)
        setFormData(vendor)
      })
  }, [id]);

  // console.log(formData)

  
  const handleChange = (e) => {
    setFormData(formData => {
        return {...formData, [e.target.name]:e.target.value}
    })
  };

  // PATCH fetch request 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/vendors/${id}`, {
      method: 'PATCH',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      editVendor(data)
    })
    navigate('/vendors');
  }


  return (
    <div id="form">
      <h3>Vendor Form</h3>
      <h4>{formData.name}</h4>
      <form onSubmit={handleSubmit}>
          <label>Vendor Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
          <label>Booth Number: </label>
          <input type="text" name="booth_number" value={formData.booth_number} onChange={handleChange}/><br/>
          <label>Cuisine ID: </label>
          <input type="number" name="cuisine_id" value={formData.cuisine_id} onChange={handleChange}/><br/>
          <label>Comment: </label>
          <input type="text" name="comment" value={formData.comment} onChange={handleChange}/><br/>
          <button type="submit">Edit</button>
      </form>
  </div>
  )
}

export default EditVendor