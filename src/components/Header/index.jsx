import React from "react";
import { 
    Cabecalho, 
    AreaImg, 
    Imagem 
} from "./styled";

const Header = ({black}) => {
    return(
        <Cabecalho black={black}>
            <AreaImg>
                <a href="/">
                    <Imagem src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt = "Netflix Logo"/>
                </a>
            </AreaImg>
            <AreaImg user>
                <a href="/">
                    <Imagem  src="https://i.pinimg.com/474x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg" alt="Usuario"/>
                </a>
            </AreaImg>
        </Cabecalho>
    )
}
export default Header;