// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Vendors from './Vendors';
import Vendor from './Vendor';
import Form from './Form';

const App = () => {

  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/vendors")
    .then((r) => r.json())
    .then((data) => setVendors(data));
  }, [])

  return (
    <div className="App">
      <h1>Welcome to Night Market</h1>
      <Vendors vendors={vendors}/>
      <Form/>
      
    </div>
  );
}

export default App;


