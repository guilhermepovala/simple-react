import React from 'react';

import '../sass/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="newsletter">
            <span>Receba nossas Novidades.</span><input placeholder="Digite seu E-mail" /><a href="">Inscrever-se</a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-12 col-sm-12 col-12 text-center logo">
              <img src="/public/img/logo_footer.png" alt="Supermecados Carol" />
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-6 col-12 lojas">
              <h5>Lojas</h5>
              <p><a href="">São Miguel do Oeste - SC (Cidade Alta)</a></p>
              <p><a href="">São Miguel do Oeste - SC (Centro)</a></p>
              <p><a href="">Franscisco Beltrão - PR</a></p>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-6 col-12 social">
              <h5>Siga-nos:</h5>
              <div className="row">
                <div className="col"><a className="fab fa-facebook-f" title="" target="_blank" href="#"></a></div>
                <div className="col"><a className="fab fa-google-plus-g" title="" target="_blank" href="#"></a></div>
                <div className="col"><a className="fab fa-twitter" title="" target="_blank" href="#"></a></div>
                <div className="col"><a className="fab fa-instagram" title="" target="_blank" href="#"></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footbar">
        <span>Todos os direitos reservados. Supermercados Carol. 2018</span>
        <div className="links">
          <a href="//dblinks.com.br/" target="_blank" title="DBLinks">
            <img src="https://d1o4jfu0f7hzgk.cloudfront.net/dynamic-layout/logo-db.png" alt="DBLinks" />
          </a>
          <a href="//sysmo.com.br/" target="_blank" title="Sysmo Sistemas">
            <img src="https://d1o4jfu0f7hzgk.cloudfront.net/dynamic-layout/logo-sysmo.png" alt="Sysmo Sistemas" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;