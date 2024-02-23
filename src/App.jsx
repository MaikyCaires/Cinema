
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Container from './components/Container';
import Card from "./components/Card";

import filmesData from "./srcJSON/filmes.json";
import Footer from "./components/Footer";

function App() {
  const imagensDeFundo = ['jogo1', 'jogo2', 'jogo3'];
  const [imagemAtual, setImagemAtual] = useState(imagensDeFundo[0]);
  const [query, setQuery] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const trocarImagem = () => {
      const indiceAtual = imagensDeFundo.indexOf(imagemAtual);
      const proximoIndice = (indiceAtual + 1) % imagensDeFundo.length;
      setImagemAtual(imagensDeFundo[proximoIndice]);
    };

    const intervalId = setInterval(trocarImagem, 5000);

    return () => clearInterval(intervalId);
  }, [imagemAtual, imagensDeFundo]);

  useEffect(() => {
    const filmesFiltrados = filmesData.filter(filme =>
      filme.nome.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilmes(filmesFiltrados);
  }, [query]);

  const toggleFavorito = (index) => {
    const filmesAtualizados = [...filmes];
    filmesAtualizados[index].favorito = !filmesAtualizados[index].favorito;
    setFilmes(filmesAtualizados);
  };

  return (
    <>
      <Header />
      <Intro img={imagemAtual} />
      <Container></Container>
      <div id='jogos' className='containerInput'>
        <input
          type="text"
          placeholder="Pesquisar jogos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      
      <section  className="container">
        {filmes.map((filme, index) => (
          <Card
            key={index}
            img={filme.img}
            nome={filme.nome}
            ano={filme.ano}
            descricao={filme.descricao}
            favorito={filme.favorito || false}
            onToggleFavorito={() => toggleFavorito(index)}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
