import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main';
import ViewOne from './components/ViewOne';
import Edit from './components/Edit';


function App() {




  return (
    <div className="App">

      {/* THEATER STATE - routes */}
      <Routes>
        {/* MAIN-all */}
        <Route path='/' element={<Main />} />
        {/* VIEW ONE */}
        <Route path='/:id' element={<ViewOne />} />
        {/* UPDATE */}
        <Route path ="/:id/edit" element={<Edit/>}/>

      </Routes>
    </div>
  );
}

export default App;
