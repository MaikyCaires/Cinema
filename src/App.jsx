import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Container from './components/Container';
import Card from "./components/Card"
import filmes from "./srcJSON/filmes.json"
import Footer from "./components/Footer"

function App() {
  const imagensDeFundo = ['cinema1', 'cinema2', 'cinema3']
  const [imagemAtual, setImagemAtual] = useState(imagensDeFundo[0])

  useEffect(() => {
    const trocarImagem = () => {
      const indiceAtual = imagensDeFundo.indexOf(imagemAtual);
      const proximoIndice = (indiceAtual + 1) % imagensDeFundo.length;
      setImagemAtual(imagensDeFundo[proximoIndice]);
    };

    const intervalId = setInterval(trocarImagem, 5000);

    return () => clearInterval(intervalId);
  }, [imagemAtual, imagensDeFundo]);

  return (
    <>
      <Header />
      <Intro img={imagemAtual} />
      <Container></Container>
      <section className="container">
        {filmes.map((filme, index) => (
          <Card
            key={index}
            img={filme.img}
            nome={filme.nome}
            ano={filme.ano}
            descricao={filme.descricao}
          />
        ))}
      </section>
      <Footer/>
    </>
  );
}

export default App

