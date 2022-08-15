// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cuisines from './Cuisines';
import Vendors from './Vendors';
import Vendor from './Vendor';
import Form from './Form';

const App = () => {

  const [vendors, setVendors] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/vendors")
    .then(res => res.json())
    .then(data => {
      setVendors(data)
    })
    // fetch("http://localhost:9292/cuisines")
    // .then(res => res.json())
    // .then(json => {
    //   console.log(json)
    // })
  }, [])

  const addVendor = (newVendor) => {
    // console.log(newVendor)
    setVendors(vendors => [...vendors, newVendor])
  }

  return (
    <div className="App">
      <h1>Welcome to Night Market</h1>
      <Cuisines cuisines={cuisines} />
      <Vendors vendors={vendors} />
      <Form addVendor={addVendor} />
      
    </div>
  );
}

export default App;


