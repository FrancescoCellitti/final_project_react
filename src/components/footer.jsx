import React from 'react';
import '../Style/footer.css';

export default function Footer() {
  return (
    <footer className="footer-netflix bg-black text-secondary pt-5 pb-4">
      <div className="container">
        <div className="mb-3 d-flex gap-3 social">
          <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
          <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
          <a href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
          <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
        </div>

        <div className="row gy-3">
          <div className="col-6 col-md-3">
            <ul className="list-unstyled small">
              <li><a href="#">Audio e sottotitoli</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contattaci</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled small">
              <li><a href="#">Carte regalo</a></li>
              <li><a href="#">Relazioni con gli investitori</a></li>
              <li><a href="#">Preferenze cookie</a></li>
              <li><a href="#">Note legali</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled small">
              <li><a href="#">Centro assistenza</a></li>
              <li><a href="#">Opportunità di lavoro</a></li>
              <li><a href="#">Informazioni aziendali</a></li>
              <li><a href="#">Test di velocità</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled small">
              <li><a href="#">Termini di utilizzo</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Guida</a></li>
              <li><a href="#">Solo su FraFlix</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-3 d-flex align-items-center gap-3">
          <button className="btn btn-outline-secondary btn-sm bg-transparent text-secondary border-secondary">
            <i className="bi bi-globe me-2" />
            Italiano <i className="bi bi-caret-down-fill ms-1" />
          </button>
          <span className="small">&copy; {new Date().getFullYear()} FraFlix</span>
        </div>
      </div>
    </footer>
  );
}