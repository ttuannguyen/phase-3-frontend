import React from 'react'
import { Link } from 'react-router-dom'

const VendorLink = ({ vendor }) => {
  return (
    <div>
        <Link to={`/vendors/${vendor.id}/edit`} style={{ textDecoration: 'none' }}>
            <p>{vendor.name}</p>
        </Link>
    </div>
  )
}

export default VendorLink