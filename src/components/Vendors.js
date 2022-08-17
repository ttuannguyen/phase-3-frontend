import React from 'react'
import Vendor from './Vendor'

const Vendors = ({ vendors, deleteVendor }) => {
    const allVendors = vendors.map(vendor => <Vendor vendor={vendor} key={vendor.id} deleteVendor={deleteVendor} />)
    return (
    <div>
        <h2>All Vendors</h2>
        {allVendors}
    </div>
  )
}

export default Vendors