import style from "./Intro.module.css"

function Intro({img}){
    return(
        <section className={style.content} style={{backgroundImage: `url('/public/${img}.jpg')`}} >
             
            <div className={style.intro}>
            <div className={style.texto}>
                        <h1>Encontre novo filmes</h1>
                        <p>Veja nosso catálogo e descubra histórias incríveis. Explore uma vasta seleção de filmes de diferentes gêneros e épocas. Desde clássicos do cinema até as últimas produções, temos opções para todos os gostos.</p>
            </div>
        </div>
        </section>
        
    )
}

export default Intro