import React from 'react'
import Vendor from './Vendor'

const Vendors = ({ vendors }) => {
    const allVendors = vendors.map(vendor => <Vendor vendor={vendor}/>)
    return (
    <div>
        <h2>Vendors</h2>
        {allVendors}
    </div>
  )
}

export default Vendors