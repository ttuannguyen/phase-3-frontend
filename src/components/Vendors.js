import React from 'react'
import Vendor from './Vendor'
import { Link } from 'react-router-dom'

const Vendors = ({ vendors, deleteVendor }) => {

    const allVendors = vendors.map(vendor => <Vendor vendor={vendor} key={vendor.id} cuisine={vendor.cuisine} deleteVendor={deleteVendor} />)

    return (
    <div id='vendors-container'>
      {allVendors}
      <Link id='add-vendor-button' to={"/vendors/new"} style={{ textDecoration: 'none' }}>
        <h3>Add a Vendor!</h3>
      </Link>
    </div>
  )
}

export default Vendors