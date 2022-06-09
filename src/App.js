import React, {useEffect, useState} from 'react';
import { GlobalStyle } from './components/globalStyle';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import styled from 'styled-components';

const Lists = styled.section`
  margin-top: -150px;
`;
const Loading = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  useEffect(()=> {
    const scrollListener = () => {
      window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)
    }
    window.addEventListener("scroll", scrollListener);
    return () =>{
      window.removeEventListener("scroll", scrollListener);
    }
  }, [])
  return(
    <div>
      <GlobalStyle/>
      <Header black={blackHeader}/>
      {FeaturedData &&
        <FeaturedMovie item={FeaturedData}/>
      }
      <Lists>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items= {item.items} />
        ))}
      </Lists>
      <footer>
        Feito por Enzo Yuji Wu com React
      </footer>
      
      {movieList.length <= 0 &&
        <Loading>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
        </Loading>
      }
    </div>
  );
};