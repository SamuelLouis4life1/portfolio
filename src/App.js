import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homes/Home';
import Sampeurs from './pages/sampeurs/home/index';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {["/", "/portfolio"].map((path, index) => 
          <Route path={path} element={<Suspense fallback="loading"><Home /></Suspense>} key={index} />
        )}
        <Route exact path="/sampeurs" element={<Suspense fallback="loading"><Sampeurs /></Suspense>} />
        <Route path="*" element={<Suspense fallback="loading"><NotFound /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;