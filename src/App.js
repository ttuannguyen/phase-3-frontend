// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Cuisines from './components/Cuisines';
import Vendors from './components/Vendors';
import Vendor from './components/Vendor';
import Form from './components/Form';
import Home from './components/Home';
import EditVendor from './components/EditVendor';
import CuisineDetails from './components/CuisineDetails';


const App = () => {

  const [vendors, setVendors] = useState([]);
  const [cuisines, setCuisines] = useState([]);



  useEffect(() => {
    fetch("http://localhost:9292/vendors")
    .then(res => res.json())
    .then(data => {
      setVendors(data)
    })
    fetch("http://localhost:9292/cuisines")
    .then(res => res.json())
    .then(data => {
      setCuisines(data)
    })
  }, [])


  const addVendor = (newVendor) => {
    // console.log(newVendor)
    setVendors(vendors => [...vendors, newVendor])
  }

  const editVendor = (updatedVendor) => {

    const updatedVendors = vendors.map(vendor =>{
      if (vendor.id === updatedVendor.id) {
        return updatedVendor;
      }
      else {
        return vendor;
      }
    })

    setVendors(updatedVendors)
    // setVendors(previousVendors => {
    //   const newVendorArr = previousVendors.map(vendor => {
    //     if(vendor.id === updatedVendor.id){
    //       return updatedVendor
    //     } else {
    //       return vendor
    //     }
    //   })
    //   return newVendorArr
    // })
  }
  
  const deleteVendor = (id) => {
    fetch(`http://localhost:9292/vendors/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(deleteVendor => {
      setVendors(vendors.filter(vendor => vendor.id !== deleteVendor.id))
    })
  }


  return (
    <Router>
      <h1>Welcome to Night Market</h1>
      <NavBar />
      <Routes>
        <Route exact path="/vendors/new" element={ <Form addVendor={addVendor} />}/>
        <Route exact path="vendors/:id/edit" element={ <EditVendor vendors={vendors} editVendor={editVendor} />} />
        <Route exact path="/vendors" element={ <Vendors vendors={vendors} deleteVendor={deleteVendor} />} />
        <Route exact path="/cuisines/:id" element={ <CuisineDetails />} />
        <Route exact path="/cuisines" element={ <Cuisines cuisines={cuisines} />} />
        <Route exact path="/" element={ <Home />} />
      </Routes>
    </Router>
      
  );
}

export default App;


