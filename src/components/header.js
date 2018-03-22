import React from 'react';

import '../sass/header.scss';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="topbar">
            <div className="super-atual">
              Preços e promoções exclusivas para o <b>Guabiruba</b> <a href="#">Trocar</a>
            </div>
            <div className="social">
              <a className="fab fa-facebook-f" title="" target="_blank" href="#"></a>
              <a className="fab fa-google-plus-g" title="" target="_blank" href="#"></a>
              <a className="fab fa-youtube" title="" target="_blank" href="#"></a>
            </div>
          </div>
          <div className="menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="#">
                <img src="/public/img/logo.png" alt="Supermecados Carol" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" href="#">Encarte</a>
                  <a className="nav-item nav-link" href="#">Lojas</a>
                  <a className="nav-item nav-link" href="#">Notícias</a>
                  <a className="nav-item nav-link active" href="#">Receitas <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="#">Rádio Carol</a>
                  <a className="nav-item nav-link" href="#">Institucional</a>
                  <a className="nav-item nav-link" href="#">Contato</a>
                  <a className="nav-item nav-link cartao-fidelidade" href="#">Cartão Fidelidade</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;