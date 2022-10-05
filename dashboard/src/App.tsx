import React from 'react';
import './App.css'
import { Navbar } from './components';
import {Box} from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Why is this mostly used for routing purpose
function App() {
  return (
    <Box className="bg-black" sx={{backgroundColor: ''}}>
      <div className="text-3xl">Hello World</div>
      <Box>
        <Navbar />
      </Box>
      <Router>
      
      </Router>
    </Box>
  )
}

export default App
