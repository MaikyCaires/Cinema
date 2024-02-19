import style from "./Container.module.css"

function Container({children}){
    return(
        <section className={style.container}>
            <h1>Catálogo</h1>
        </section>
    )
}

export default Container