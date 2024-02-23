import style from "./Intro.module.css"

function Intro({img}){
    return(
        <section className={style.content} style={{backgroundImage: `url('${img}.jpg')`}} >
             
            <div className={style.intro}>
            <div className={style.texto}>
                        <h1>Os melhores jogos</h1>
                        <p>Confira nossa coleção e mergulhe em narrativas extraordinárias. Navegue por uma ampla variedade de jogos de diversos gêneros e épocas. De títulos clássicos a lançamentos recentes, oferecemos opções para todos os tipos de jogadores.</p>
            </div>
        </div>
        </section>
        
    )
}

export default Intro