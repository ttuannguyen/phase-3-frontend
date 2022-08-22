import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CuisineDetails = () => {

    const [cuisine, setCuisine] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:9292/cuisines/${id}`)
        .then(res => res.json())
        .then(data => setCuisine(data))
    }, [id]);

  
    return (
      <div className='cuisine-detail'>
        <h4 className='cuisine-name' >Welcome to the {cuisine.name} Cuisine</h4>
    </div>
    )
  }

export default CuisineDetails