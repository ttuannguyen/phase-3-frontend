import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VendorDetails = () => {

    const [vendor, setVendor] = useState({
        cuisine: []
    });
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:9292/vendors/${id}`)
        .then(res => res.json())
        .then(data => setVendor(data))
    }, [id]);

    // console.log(vendor.cuisine)


    return (
        <div className='vendor-detail'>
            <h3>{vendor.name}</h3>
            <h4>Booth # {vendor.booth_number}</h4>
            <h4>Cuisine: {vendor.cuisine.name}</h4>
            <h4>Comment: {vendor.comment}</h4>
        </div>

    )
  }

export default VendorDetails