import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homes/Home';
import Sampeurs from './pages/sampeurs/Sampeurs';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Suspense fallback="loading"><Home /></Suspense>}/>
        <Route exact path="/sampeurs" element={<Suspense fallback="loading"><Sampeurs /></Suspense>} />
        <Route path="*" element={<Suspense fallback="loading"><NotFound /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;