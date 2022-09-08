import React from 'react'
import { Link } from 'react-router-dom'

const Vendor = ({vendor, cuisine, deleteVendor}) => {

    return (
        <div className='vendor-card'>
            <Link to={`/vendors/${vendor.id}`} style={{ textDecoration: 'none' }}>
                <h3>{vendor.name}</h3>
            </Link>
            <h4>Booth # {vendor.booth_number}</h4>
            <h4>Cuisine: {cuisine.name}</h4>
            <h4>Comment: {vendor.comment}</h4>
            <button onClick={() => deleteVendor(vendor.id)}>Delete</button>
            <Link to={`/vendors/${vendor.id}/edit`} style={{ textDecoration: 'none' }}>
                <button>Edit Vendor</button>
            </Link>
        </div>
    )
}

export default Vendor