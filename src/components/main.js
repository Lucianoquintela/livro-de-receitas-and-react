import React from "react";
import "./main.css";
import imagemBolo from "../assets/images/bolo.jpeg";
import imagemCremeDeGalinha from "../assets/images/creme-de-galinha.jpg";
import imagemMolhoDeAlho from "../assets/images/molho-de-alho.jpg";
function Main() {
  return (
    <div class="header">
      <div class="containerMenu">
        <h2>Descubra Novas Receitas</h2>

        <div class="cards-receitas">
          <div class="card">
            <img src={imagemBolo} class="imagemReceita"></img>
            <p>Bolo</p>
            <p>4.5 estrelas</p>
          </div>

          <div class="card">
            <img src={imagemCremeDeGalinha} class="imagemReceita"></img>
            <p>Creme de Galinha</p>
            <p>4.5 estrelas</p>
          </div>

          <div class="card">
            <img src={imagemMolhoDeAlho} class="imagemReceita"></img>
            <p>Molho de Alho</p>
            <p>4.5 estrelas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
