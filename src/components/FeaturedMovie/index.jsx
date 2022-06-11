import React from "react";
import {
    Featured, 
    Vertical, 
    Horizontal, 
    Name, 
    Infos, 
    Info, 
    Description, 
    ButtonsArea, 
    Button, 
    Genders
} from "./styled";

const FeaturedMovie = ({item}) => {
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
                    <ButtonsArea>
                        <Button first href={`/watch/${item.id}`}>▶ Assistir</Button>
                        <Button href={`/list/add/${item.id}`}>+ Minha Lista</Button>
                    </ButtonsArea>
                    <Genders><strong>Gêneros: </strong> {genres.join(', ')}</Genders>
                </Horizontal>
            </Vertical>
        </Featured>
    )
}
export default FeaturedMovie;