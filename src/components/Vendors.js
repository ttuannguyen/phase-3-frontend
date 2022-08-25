import React from 'react'
import Vendor from './Vendor'

const Vendors = ({ vendors, deleteVendor }) => {

    // console.log(`vendors: ${vendors}`)
    // console.log(vendors)

    const allVendors = vendors.map(vendor => <Vendor vendor={vendor} key={vendor.id} cuisine={vendor.cuisine} deleteVendor={deleteVendor} />)
    
    // console.log(allVendors)

    return (
    <div>
        <h2>All Vendors</h2>
        {allVendors}
    </div>
  )
}

export default Vendors