import React from 'react'
import { Link } from 'react-router-dom'

const Cuisine = ({ cuisine }) => {
  return (
    <div>
      <Link to={`/cuisines/${cuisine.id}`} style={{ textDecoration: 'none' }}>
        <h3>{cuisine.name}</h3>
      </Link>
    </div>
  )
}

export default Cuisine