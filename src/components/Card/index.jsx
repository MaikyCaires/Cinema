import style from "./Card.module.css"

function Card({img, nome, ano, descricao}){
    return (
      <div className={style.filme}>
        <div className={style.catalogo}>
          <img src={`${img}`} alt="filme" />
          <div className={style.texto}>
            <h2>{`${nome}`}</h2>
            <p>{`${ano}`}</p>
            <p>{`${descricao}`}</p>
          </div>
        </div>
      </div>
    );
}

export default Card