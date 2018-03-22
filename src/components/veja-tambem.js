import React from 'react';

import '../sass/veja-tambem.scss';

const VejaTambem = (props) => {
  const receitasItens = props.receitas.map((receita) => {
    return (
      <div className="col">
        <a href="#" className="img-wrap">
          <img src={receita.img} alt="" />
          <header>
            <div className="content">
              <h5>{receita.titulo}</h5>
              <button>Ver receita</button>
            </div>
          </header>
        </a>
      </div>
    );
  });

  return (
    <div className="veja-tambem">
      <h3>Veja Também:</h3>

      <div className="container">
        <div className="row">
          {receitasItens}
        </div>
      </div>
    </div>
  );
};

export default VejaTambem;