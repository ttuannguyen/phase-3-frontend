import React from 'react'
import { Link } from 'react-router-dom'

const Vendor = ({vendor, deleteVendor}) => {
    // console.log(vendor)
    return (
        <div>
            <h3>{vendor.name}</h3>
            <h4>Booth # {vendor.booth_number}</h4>
            <h4>Cuisine ID: {vendor.cuisine_id}</h4>
            <h4>Comment: {vendor.comment}</h4>
            <button onClick={() => deleteVendor(vendor.id)}>Delete</button>
            <Link to={`/vendors/${vendor.id}/edit`} style={{ textDecoration: 'none' }}>
                <button>Edit Vendor</button>
            </Link>
        </div>
    )
}

export default Vendor