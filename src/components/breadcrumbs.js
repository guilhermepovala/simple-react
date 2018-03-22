import React from 'react';

import '../sass/breadcrumbs.scss';

const Breadcrumbs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="breadcrumbs">
          <span>Você está em: </span>
          <a href="#">Home</a>
          <a href="#">Receitas</a>
          <a href="#">Hambúrguer caseiro</a>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;