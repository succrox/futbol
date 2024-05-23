import React, { useState } from 'react';
import './top.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/logo.png'

function Top()  {
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light navbar-black">
      <div className="container-fluid justify-content-start">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className="navbar-logo image-no-bg" />
        </a>
        <div className="navbar-info-container">
          <div className="navbar-info-row d-flex justify-content-between">
            <span className="navbar-info-dark">@ contact@topclub.com <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg> +1 3137730202 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg> 27 Orlando Portland</span>
            <div className="info-row-right">
              <span className='row-right-span text-warning'>Buy tickets</span>
              <span className='row-right-span'>Login</span>
              <span className='row-right-span'>Register</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-basket-fill row-right-span" viewBox="0 -1 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
              </svg>
            </div>
          </div>
          <div className="navbar-info-row d-flex justify-content-between">
            <div className='info-row-left'>
              <span className='row-left-hover'>HOME</span>
              <span className='row-left-hover'>NEWS</span>
              <span className='row-left-hover'>TEAM</span>
              <span className='row-left-hover'>SOCCER</span>
              <span className='row-left-hover'>PAGES</span>
              <span className='row-left-hover'>SHOP</span>
              <span className='row-left-hover'>PURCHASE</span>
            </div>
            <input name="search" id="search" className='info-row-searchbar' placeholder="Buscar..."/>
          </div>
        </div>
      </div>
    </nav>
    </>
    )
};

export default Top;