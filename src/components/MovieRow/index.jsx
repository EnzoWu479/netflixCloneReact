import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { 
    Roll,
    Titulo,
    Lista,
    ListArea,
    Item,
    Imagem,
    Icon
} from "./styled";


const MovieRow = ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }
    return(
        <Roll>
            <Titulo>{title}</Titulo>
            
            <Icon className="Nav" onClick={handleLeftArrow}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Icon>
            <Icon Right className="Nav" onClick={handleRightArrow}>
                <FontAwesomeIcon icon={faChevronRight} />
            </Icon>
            <ListArea>
                <Lista style={{
                    width: items.results.length * 150,
                    marginLeft: scrollX
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Item key={key}>
                            <Imagem src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title} />
                        </Item>
                    ))}
                </Lista>
            </ListArea>
        </Roll>
    );
};
export default MovieRow;
