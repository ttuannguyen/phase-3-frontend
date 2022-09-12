import React from 'react';
import { Link } from 'react-router-dom';
import Cuisine from './Cuisine';

const Cuisines = ( {cuisines }) => {

  
  const allCuisines = cuisines.map(cuisine => <Cuisine cuisine={cuisine} key={cuisine.id} /> )

  return (
  <div>
      <h2>All Cuisines</h2>
      {allCuisines}
      <Link to={"/cuisines/new"} style={{ textDecoration: 'none' }}>
        <button>Add a Cuisine</button>
      </Link>
  </div>
)
}

export default Cuisines