import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import ListaRegioni from './includes/ListaRegioni';
import Mappa from './mappa/Mappa';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gioco from './includes/Gioco';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="comuniLista" element={<ListaRegioni />} />
      <Route path="mappa" element={<Mappa />} />
      <Route path="gioco" element={<Gioco/>} /> 
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
