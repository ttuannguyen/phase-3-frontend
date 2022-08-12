import React from 'react'

const Vendor = ({vendor}) => {
    console.log(vendor)
    return (
        <div>
            <h2>{vendor.name}</h2>
            <h3>Booth # {vendor.booth_number}</h3>
            <h3>Cuisine ID: {vendor.cuisine_id}</h3>
            <h3>Comment: {vendor.comment}</h3>
        </div>
    )
}

export default Vendor