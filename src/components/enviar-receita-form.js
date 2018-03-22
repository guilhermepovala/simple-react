import React, { Component } from 'react';

import '../sass/form.scss';

class EnviarReceitaForm extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="form-simples">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail">Email do Destinatário: *</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email do Destinatário" required />
            </div>
            <div className="form-group col-md-6">
              <label for="inputNome">Seu nome: *</label>
              <input type="text" className="form-control" id="inputNome" placeholder="Digite seu Nome" required />
            </div>
          </div>
          <div className="form-group">
            <label for="inputMensagem">Mensagem</label>
            <textarea className="form-control" id="inputMensagem" placeholder="Sua mensagem..." rows="3"></textarea>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    );
  };
};

export default EnviarReceitaForm;