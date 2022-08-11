// import logo from './logo.svg';
// import './App.css';
import { useEffect } from 'react';


const App = () => {
  
  useEffect(() => {
    fetch("http://localhost:9292/vendors")
    .then((r) => r.json())
    .then((data) => console.log(data));
  }, [])

  return (
    <div className="App">
      <h1>Phase 3 Project</h1>
    </div>
  );
}

export default App;
