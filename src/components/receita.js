import React, { Component } from 'react';
import Compartilhe from './compartilhe';
import EnviarReceitaForm from './enviar-receita-form';

import '../sass/receita.scss';


class Receita extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    }
  }

  onClick(e){
    e.preventDefault();
    this.setState({showForm: !this.state.showForm})
  }

  render() { 
    return (
      <div className="container receita">
        <div className="row">
          <div className="col">
            <div className="data">22 de fevereiro de 2017</div>
            <h2>Hambúrguer caseiro</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="left">
              <img className="foto" src="/public/img/hamburger.png" alt="" />
              <Compartilhe />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="right">
              <ul className="info">
                <li className="tempo">
                  <img className="icon" src="/public/img/time.png" alt=""/>
                  <b>Tempo de preparo</b>
                  <p>60 min</p>
                </li>
                <li className="porcoes">
                  <img className="icon" src="/public/img/yield.png" alt=""/>
                  <b>Rendimento</b>
                  <p>4 porções</p>
                </li>
                <li className="imprimir">
                  <img className="icon" src="/public/img/print.png" alt=""/>
                  <a href="#"><b>Imprimir Receita</b></a>
                </li>
              </ul>

              <div className="corpo">
                <h5>Ingredientes:</h5>
                <p>3 kg de carne moída (escolha uma carne magra e macia)</p>
                <p>300 g de bacon moído</p>
                <p>1 ovo</p>
                <p>3 colheres (sopa) de farinha de trigo</p>
                <p>3 colheres (sopa) de tempero caseiro: feito com alho, sal, cebola, pimenta e cheiro verde processados no liquidificador</p>
                <p>30 ml de água gelada</p>

                <h5>Modo de preparo:</h5>
                <p>Misture todos os ingredientes muito bem e vá amassando para que fique tudo muito bem misturado.</p>
                <p>Faça porções de 90 a 100 gramas.</p>
                <p>Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base.</p>
                <p>Faça um de cada vez e vá retirando o aro logo em seguida.</p>
                <p>Forre uma assadeira de metal com plástico, coloque os hambúrgueres e vá intercalando camadas de carne e plásticos</p>
                <p>(sem apertar).</p>
                <p>Faça no máximo 4 camadas por forma e leve para congelar.</p>
                <p>Retire do congelador, frite ou asse, e está pronto.</p>
              </div>

              <div className="enviar-receita">
                <a onClick={this.onClick.bind(this)} href='#'>Enviar receita por email</a>
              </div>
                
              {this.state.showForm && <EnviarReceitaForm />}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Receita;