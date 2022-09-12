// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Vendors from './components/Vendors';
import VendorAddForm from './components/VendorAddForm';
import Home from './components/Home';
import EditVendor from './components/EditVendor';
import Cuisines from './components/Cuisines';
import CuisineDetails from './components/CuisineDetails';
import CuisineAddForm from './components/CuisineAddForm';
import VendorDetails from './components/VendorDetails';


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


  const addCuisine = (newCuisine) => {
    setCuisines(cuisines => [...cuisines, newCuisine])
  }

  
  const addVendor = (newVendor) => {
    setVendors(vendors => [...vendors, newVendor])
  }

  const editVendor = (updatedVendor) => {

    const updatedVendors = vendors.map(vendor => {
      if (vendor.id === updatedVendor.id) {
        return updatedVendor;
      }
      else {
        return vendor;
      }
    })

    setVendors(updatedVendors)
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
      <h1>Night Market</h1>
      <NavBar />
      <Routes>
        <Route exact path="/vendors/new" element={ <VendorAddForm addVendor={addVendor} />}/>
        <Route exact path="/vendors" element={ <Vendors vendors={vendors} deleteVendor={deleteVendor} />} />
        <Route path="vendors/:id/edit" element={ <EditVendor vendors={vendors} editVendor={editVendor} />} />
        <Route path="/vendors/:id" element={ <VendorDetails />} />
        <Route exact path="cuisines/new" element={ <CuisineAddForm addCuisine={addCuisine} />} />
        <Route exact path="/cuisines" element={ <Cuisines cuisines={cuisines} />} />
        <Route path="/cuisines/:id" element={ <CuisineDetails cuisines={cuisines} />} />
        <Route exact path="/" element={ <Home />} />
      </Routes>
    </Router>
      
  );
}

export default App;


