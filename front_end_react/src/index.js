import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Water from './component/water';
import Cake from './component/cake';
import Food from './component/food';
import Order from './component/order';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <App/> }/>
      <Route path='/Home' element={ <Home/> } />
      <Route path='/water' element={ <Water />} />
      <Route path='/cake' element={<Cake />} />
      <Route path='/food' element={<Food />} />
      <Route path='/order' element={<Order />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 /*<BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <App/> }/>
      <Route path='/Home' element={ <Home/> } />
      <Route path='/water' element={ <Water />} />
      <Route path='/cake' element={<Cake />} />
      <Route path='/breakfast' element={<Breakfast />} />
    </Routes>
  </BrowserRouter>,*/

  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,*/ 