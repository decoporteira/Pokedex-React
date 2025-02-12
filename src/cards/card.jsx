import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useContext } from "react";
import  { ThemeContext }  from "../contexts/themeContext";

const Card = ({title, src, pokeNumber, type, color = 'red'}) => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <Link to={`/pokemon/${pokeNumber}`}>
            <CardPokemon style={{
                                color: theme.color, 
                                backgroundColor: theme.backgroundCard}}>
                <img className="card-img-top" width="60%"  src={src} />
                <H4>{title}</H4>
               {type}
            </CardPokemon>
        </Link>
    )
}

const H4 = styled.h4`
    margin-bottom: 0;
`;
const CardPokemon = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 7px;
  width: 140px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  transition-duration: .3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(100, 100, 111, 0.4) 0px 8px 30px 0px;
  }
 `
export default Card;