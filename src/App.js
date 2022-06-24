import React, {useEffect, useState} from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import { Lists, Loading } from './styledApp';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen;
      let chosen;
      let chosenInfo;
      do{
        randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        chosen = originals[0].items.results[randomChosen];
        chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      }while(chosenInfo.backdrop_path === null);
      setFeaturedData(chosenInfo);
    };
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
          <MovieRow key={key} title={item.title} items= {item.items} mudarFeatured={setFeaturedData}/>
        ))}
      </Lists>
      <footer>
        Feito por Enzo Yuji Wu com React e styled Components
      </footer>
      
      {movieList.length <= 0 &&
        <Loading>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
        </Loading>
      }
    </div>
  );
};
export default App;