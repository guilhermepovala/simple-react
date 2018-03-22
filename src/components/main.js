import React, { Component } from 'react';

import Breadcrumbs from './breadcrumbs';
import Banner from './banner';
import Receita from './receita';
import VejaTambem from './veja-tambem';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { receitas: [
        {titulo: "Receita 1", img: "/public/img/receita1.png"},
        {titulo: "Receita 2", img: "/public/img/receita2.png"},
        {titulo: "Receita 3", img: "/public/img/receita3.png"},
        {titulo: "Receita 4", img: "/public/img/receita4.png"},
        {titulo: "Receita 5", img: "/public/img/receita5.png"}
      ]};
  }

  render() {
    return (
      <div className="main">
        <Breadcrumbs />
        <Banner />
        <Receita />
        <VejaTambem receitas={this.state.receitas} />
      </div>
    );
  };
};

export default Main;