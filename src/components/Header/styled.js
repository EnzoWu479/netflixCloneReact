import styled from "styled-components";

export const Cabecalho = styled.header`
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
export const AreaImg = styled.div`
    height: ${(props) => (props.user ? "35px" : "25px")};
`;
export const Imagem = styled.img`
    height: 100%;
    border-radius: ${(props) => (props.user ? "3px" : "0px")};
`;