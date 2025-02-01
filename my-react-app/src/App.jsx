import { useState } from 'react'
import { Bar } from "react-chartjs-2";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FancyBox from "./components/FancyBox";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SalesPage from "./pages/SalesPage";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";




import './App.css'



export default function App() {

  return (

  

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="salesPage" element={<SalesPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="prices" element={<Prices />} />
        </Route>
      </Routes>
    </BrowserRouter>



    

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
