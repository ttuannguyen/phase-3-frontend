// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Cuisines from './components/Cuisines';
import Vendors from './components/Vendors';
import Vendor from './components/Vendor';
import Form from './components/Form';

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
        <Route exact path="/vendors" element={ <Vendors vendors={vendors} deleteVendor={deleteVendor} />} />
        <Route exact path="/cuisines" element={ <Cuisines cuisines={cuisines} />} />
      </Routes>
    </Router>
      
  );
}

export default App;


