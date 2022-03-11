import Social from "./Social";

const Sobre = ({nome, cargo, idade}) =>{
    return(
        <div>
            <h2>Olá, sou o {nome}</h2>
            <p>{cargo}</p>
            <p>{idade}</p>
            <Social link={'https://google.com'}/>
            <hr/>
        </div>
    )
}


export default Sobre;