const Card = ({title, url, type, color = 'red', showCardColor}) => {
    return (
        <div
         style={{backgroundColor: color}}
         onClick={() => showCardColor(color)}
        > 
            <h2>{title}</h2>
            <img src={url} />
            <p>{type}</p>
        </div>
    )
}

export default Card