import React from 'react'
import Cuisine from './Cuisine'

const Cuisines = ({ cuisines }) => {
  const allCuisines = cuisines.map(cuisine => <Cuisine cuisine={cuisine} key={cuisine.id} /> )
  return (
  <div>
      <h2>All Cuisines</h2>
      {allCuisines}
  </div>
)
}

export default Cuisines