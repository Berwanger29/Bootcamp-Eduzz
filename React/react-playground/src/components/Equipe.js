import Sobre from "./Sobre"

const Equipe = ({nome, cargo, idade}) => {
    return (
      <div>
        <Sobre nome={nome} cargo={cargo} idade={idade}/>
      </div>
    )
  }


  export default Equipe