import React from 'react';
import Menu from './components/Menu';
import dadosiniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style= {{background: "#141414"}}>
      <Menu></Menu>
      <BannerMain videoTitle ={dadosiniciais.categorias[0].titulo} url={dadosiniciais.categorias[0].videos[0].url} videoDescription={"O que é front-end? O que faz uma desenvolvedora front-end"}>
      </BannerMain>

      <Carousel ignoreFirstVideo category={dadosiniciais.categorias[0]}></Carousel>

      <Carousel ignoreFirstVideo category={dadosiniciais.categorias[1]}></Carousel>

      <Carousel ignoreFirstVideo category={dadosiniciais.categorias[2]}></Carousel>

      <Carousel ignoreFirstVideo category={dadosiniciais.categorias[3]}></Carousel>

      <Carousel ignoreFirstVideo category={dadosiniciais.categorias[4]}></Carousel>

      <Carousel ignoreFirstVideo category={dadosiniciais.categorias[5]}></Carousel>
    </div>
  );
}

export default App;
