import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Card = ({title, src, pokeNumber, type, color = 'red', showCardColor}) => {
    return (
        <div className="col-sm-2 mb-4 mb-sm-4" onClick={() => showCardColor(color)}>
            <Link className='link-offset-2 link-underline link-underline-opacity-0' to={`/pokemon/${pokeNumber}`}>
                <div className="card px-1 py-1 shadow-sm">
                    <img className="card-img-top" width="60%"  src={src} />
                    
                    <div className="card-body px-0 py-0">
                        <span className="card-text pb-1 mb-0"><H4>{title}</H4></span>
                        <div className="d-flex align-items-center">
                        <small className="text-body-secondary text-center">{type}</small>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const H4 = styled.h4`
    margin-bottom: 0;
`;

export default Card;