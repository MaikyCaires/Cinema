import React from 'react';
import style from "./Card.module.css";
import { FaStar, FaRegStar } from 'react-icons/fa';

function Card({ img, nome, ano, descricao, favorito, onToggleFavorito }) {
  return (
    <div className={style.jogo}>
      <div className={style.catalogo}>
        <img src={img} alt="jogo" />
        <div className={style.texto}>
          <h2>{nome}</h2>
          <p>{ano}</p>
          <p>{descricao}</p>
          <button
            className={style.botaoFavorito}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorito();
            }}
          >
            {favorito ? <FaStar color="gold" /> : <FaRegStar />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;


