import React from 'react'
import Vendor from './Vendor'

const Vendors = ({ vendors }) => {
    const allVendors = vendors.map(v => <Vendor vendor={v}/>)
    return (
    <div>
        <h2>Vendors</h2>
        {allVendors}
    </div>
  )
}

export default Vendors