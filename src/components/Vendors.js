import React from 'react'
import Vendor from './Vendor'
import { Link } from 'react-router-dom'

const Vendors = ({ vendors, deleteVendor }) => {

    // console.log(`vendors: ${vendors}`)
    // console.log(vendors)

    const allVendors = vendors.map(vendor => <Vendor vendor={vendor} key={vendor.id} cuisine={vendor.cuisine} deleteVendor={deleteVendor} />)
    
    // console.log(allVendors)

    return (
    <div>
        <h2>All Vendors</h2>
        {allVendors}
        <Link to={"/vendors/new"} style={{ textDecoration: 'none' }}>
        <h4>Add a Vendor</h4>
      </Link>
    </div>
  )
}

export default Vendors