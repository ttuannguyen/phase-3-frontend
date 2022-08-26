import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CuisineDetails = () => {

    const [cuisine, setCuisine] = useState({
        vendors: []
    });
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:9292/cuisines/${id}`)
        .then(res => res.json())
        .then(data => setCuisine(data))
    }, [id]);

    // const allVendors = cuisine.vendors.map(vendor => <Vendor vendor={vendor} key={vendor.id} cuisine={vendor.cuisine} />)

    // console.log(cuisine.vendors)

    // const allVendors = cuisine.vendors.map(vendor => {
    //     return (
    //         <li key={vendor.id}>{vendor.name}</li>
    //     )
    // })

    // const allVendors = cuisine.vendors.map(vendor => <VendorLink vendor={vendor} key={vendor.id} />)

    const allVendors = cuisine.vendors.map(vendor => {
      return (
        <Link to={`/vendors/${vendor.id}/edit`} key={vendor.id} style={{ textDecoration: 'none' }}>
          <p>{vendor.name}</p>
        </Link>
      )
    })


    return (
        <div className='cuisine-detail'>
            <h4 className='cuisine-name'>Welcome to the {cuisine.name} Cuisine</h4>
            { allVendors }
        </div>

    )
  }

export default CuisineDetails