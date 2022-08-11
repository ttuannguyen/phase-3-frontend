// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Vendors from './Vendors';
import Form from './Form';

const App = () => {

  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/vendors")
    .then((r) => r.json())
    .then((data) => console.log(data));
  }, [])

  return (
    <div className="App">
      <h1>Welcome to Night Market</h1>
      <Vendors/>
      <Form/>
    </div>
  );
}

export default App;
