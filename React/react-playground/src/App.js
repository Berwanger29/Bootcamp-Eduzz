import style from './style.css'

import Greetings from './components/Greetings'

function App(){
  return(
    <div>
      <Greetings nome='Vinicius' idade={22}/>
      <Greetings nome='Bruno' idade={21}/>
      <h1>Curso de React</h1>
    </div>
  )
}

export default App