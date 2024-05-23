import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './tabla.jsx'
import Top from './top.jsx'
import Footer from './footter.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Top/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)
