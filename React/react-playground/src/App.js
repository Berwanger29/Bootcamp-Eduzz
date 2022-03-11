import style from './style.css'

import Greetings from './components/Greetings'
import Equipe from './components/Equipe'



function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe
        nome="Vinicius"
        cargo="programador"
        idade={22}
      />
      <Equipe
        nome="Bruno"
        cargo="designer"
        idade={21}
      />
      <Equipe
        nome="Amanda"
        cargo="scrum master"
        idade={25}
      />
    </div>
  )
}

export default App