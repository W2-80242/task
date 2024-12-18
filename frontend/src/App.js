import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Details from './components/Details';
import AddUser from './components/AddUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/addUser" element={<AddUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
