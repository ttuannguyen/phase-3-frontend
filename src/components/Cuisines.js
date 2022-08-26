import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cuisine from './Cuisine';

const Cuisines = ( {cuisines }) => {
  
  // const [cuisines, setCuisines] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:9292/cuisines")
  //   .then(res => res.json())
  //   .then(data => {
  //     setCuisines(data)
  //   })
  // }, [])

  // const addCuisines = (newCuisine) => {
  //   console.log(newCuisine)
  //   // setVendors(vendors => [...vendors, newVendor])
  // }
  
  const allCuisines = cuisines.map(cuisine => <Cuisine cuisine={cuisine} key={cuisine.id} /> )

  return (
  <div>
      <h2>All Cuisines</h2>
      {allCuisines}
      <Link to={"/cuisines/new"} style={{ textDecoration: 'none' }}>
        <h4>Add a Cuisine</h4>
      </Link>
  </div>
)
}

export default Cuisines