 import React from 'react';
 import '../Style/header.css'; 

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-netflix px-3">
      <a className="navbar-brand fw-bold me-3 brand-netflix " href="#">
        FraFlix
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Film</a></li>
        </ul>

       {/*  <form className="d-none d-md-flex me-3 header-search">
          <i className="bi bi-search me-2 text-secondary" />
          <input
            className="form-control form-control-sm bg-dark text-white border-0"
            type="search"
            placeholder="Titoli, persone, generi"
            aria-label="Search"
          />
        </form> */}

        {/* <a className="text-secondary me-3 d-none d-md-inline" href="#">Bambini</a> */}
{/* 
        <button className="btn btn-link text-secondary me-3 p-0">
          <i className="bi bi-bell fs-5" />
        </button> */}
{/* 
        <div className="dropdown">
          <button
            className="btn btn-link p-0 d-flex align-items-center text-decoration-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://i.pravatar.cc/32"
              alt="profile"
              className="rounded"
              width="32"
              height="32"
            />
            <i className="bi bi-caret-down-fill ms-2 text-secondary" />
          </button> */}
         {/*  <ul className="dropdown-menu dropdown-menu-end dropdown-netflix">
            <li><a className="dropdown-item" href="#">Profilo</a></li>
            <li><a className="dropdown-item" href="#">Gestisci profili</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Esci</a></li>
          </ul>
        </div> */}
      </div>
    </nav>
    </>
    
  );
}