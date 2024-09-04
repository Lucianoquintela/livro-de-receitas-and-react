import React from "react";
import "./header.css";
function Header() {
  return (
    <div class="header">
      <div class="containerTitulo">
        <h1>
          Minha
          <br />
          Cozinha
        </h1>
      </div>

      <div class="containerLinks">
        <p class="botoesLinks">Home</p>
        <p class="botoesLinks">Receitas</p>
        <p class="botoesLinks">Categorias</p>
        <p class="botoesLinks">Sobre Nós</p>
        <p class="botoesLinks">Contato</p>
      </div>
    </div>
  );
}

export default Header;
