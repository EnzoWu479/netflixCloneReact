import React from "react";
import styled from "styled-components";

const Featured = styled.div`
    height: 100vh;
    background-size: cover;
    background-position: center;
    @media (max-width: 760px){
        height: 90vh;
    }
`;
const Vertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;
const Horizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;
`;
const Name = styled.div`
    font-size: 60px;
    font-weight: bold;
    @media (max-width: 760px){
        font-size: 40px;
    }
`;
const Infos = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
    @media (max-width: 760px){
        font-size: 16px;
    }
`;
const Info = styled.div`
    display: inline-block;
    margin-right: 15px;
    color: ${(props) => (props.point ? "#46d369" : "white")};
`;
const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @media (max-width: 760px){
        font-size: 16px;
        max-width: 100%;
        margin-right: 30px;
    }
`;
const Buttons_area = styled.div`
    margin-top: 15px;
`;
const Button = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    color: ${(props) => (props.first ? "black" : "white")};
    background-color: ${(props) => (props.first ? "white" : "#333")};
    opacity: 1;
    transition: all ease 0.2s;
    &:hover{
        opacity: 0.7;
    }
    @media (max-width: 760px){
        font-size: 16px;
    }
`;
const Genders = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
    @media (max-width: 760px){
        font-size: 14px;
    }
`;
export default ({item}) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
    
    return(
        <Featured style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <Vertical>
                <Horizontal>
                    <Name>{item.original_name}</Name>
                    <Infos>
                        <Info point >{item.vote_average} pontos</Info>
                        <Info>{firstDate.getFullYear()}</Info>
                        <Info>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : ""}</Info>
                    </Infos>
                    <Description>{item.overview}</Description>
                    <Buttons_area>
                        <Button first href={`/watch/${item.id}`}>▶ Assistir</Button>
                        <Button href={`/list/add/${item.id}`}>+ Minha Lista</Button>
                    </Buttons_area>
                    <Genders><strong>Gêneros: </strong> {genres.join(', ')}</Genders>
                </Horizontal>
            </Vertical>
        </Featured>
    )
}