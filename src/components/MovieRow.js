import React, {useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Roll = styled.div`
    margin-bottom: 30px;
    &:hover .Nav{
        opacity: 1;
    }
`;
const Titulo = styled.h2`
    margin: 0px 0px 0px 30px;
`;
const Lista = styled.div`
    transition: all ease 0.5s;
`;
const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;
const Item = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
`;
const Imagem = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover{
        transform: scale(1);
    }
`;
const Icon = styled.div`
    font-size: 30px;
    position: absolute;
    width: 40px;
    height: 225px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    transition: all ease 0.5s;
    opacity: 0;
    ${(props) => (props.Right ? "right: 0" : "left: 0")};
    @media (max-width: 760px){
        opacity: 1;
    }
`;

export default ({title, items}) => {
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
                            <Imagem src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title}/>
                        </Item>
                    ))}
                </Lista>
            </ListArea>
        </Roll>
    );
};

