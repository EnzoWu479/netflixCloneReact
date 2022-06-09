import React from "react";
import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: ${(props) => (props.black ? "#141414" : "transparent")};
    transition: all ease 0.5s;
`;
const Area_img = styled.div`
    height: ${(props) => (props.user ? "35px" : "25px")};
`;
const Imagem = styled.img`
    height: 100%;
    border-radius: ${(props) => (props.user ? "3px" : "0px")};
`;
export default ({black}) => {
    return(
        <Header black={black}>
            <Area_img>
                <a href="/">
                    <Imagem src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt = "Netflix Logo"/>
                </a>
            </Area_img>
            <Area_img user>
                <a href="/">
                    <Imagem  src="https://i.pinimg.com/474x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg" alt="Usuario"/>
                </a>
            </Area_img>
        </Header>
    )
}