import React from 'react';
import dadosiniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <PageDefault>
        <BannerMain videoTitle={dadosiniciais.categorias[0].titulo} url={dadosiniciais.categorias[0].videos[0].url} videoDescription="O que é front-end? O que faz uma desenvolvedora front-end" />

        <Carousel ignoreFirstVideo category={dadosiniciais.categorias[0]} />

        <Carousel ignoreFirstVideo category={dadosiniciais.categorias[1]} />

        <Carousel ignoreFirstVideo category={dadosiniciais.categorias[2]} />

        <Carousel ignoreFirstVideo category={dadosiniciais.categorias[3]} />

        <Carousel ignoreFirstVideo category={dadosiniciais.categorias[4]} />

        <Carousel ignoreFirstVideo category={dadosiniciais.categorias[5]} />

      </PageDefault>
    </div>
  );
}

export default Home;
