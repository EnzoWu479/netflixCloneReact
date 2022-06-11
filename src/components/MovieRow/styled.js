import styled from "styled-components";

export const Roll = styled.div`
    margin-bottom: 30px;
    &:hover .Nav{
        opacity: 1;
    }
`;
export const Titulo = styled.h2`
    margin: 0px 0px 0px 30px;
`;
export const Lista = styled.div`
    transition: all ease 0.5s;
`;
export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;
export const Item = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
`;
export const Imagem = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover{
        transform: scale(1);
    }
`;
export const Icon = styled.div`
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