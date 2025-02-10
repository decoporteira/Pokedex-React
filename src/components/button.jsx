const sayHello = () => {
    console.log('Olá')
}

export const Button = ({txt, newClass}) => {
    return <button className={newClass} onClick={sayHello}>{txt}</button>
}