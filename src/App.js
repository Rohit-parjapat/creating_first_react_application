import './App.css';
import { useState } from 'react';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import { Route, Routes } from 'react-router-dom';
// Import Hoc

// import BaseHoc from './layouts/BaseHoc';

function App() {

  const [name, setName] = useState("Rohit");

  const college = "Govt. PG college";
  return (
    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route path="/functional-component"
        element={<FunctionalComponent name={name} age={22} college={college} setName={setName} />} />
    </Routes>
  );
}

export default App;

/* <div className='App'>
<h1>Class Component</h1>
<ClassComponent />
<br />
<h1>Functional Component</h1>
<FunctionalComponent name={name} age='22' college={college} setName={setName} />
</div> */