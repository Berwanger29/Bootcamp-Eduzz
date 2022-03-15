import Context from './utils/Context'


import { Header } from './components/Header/'
import { Projects } from './components/Pojects'
import { Input } from './components/Input'


const App = () => {
  return (
    <Context.Provider>
      <Input />
      <Header />
      <Projects />
    </Context.Provider>
  )
}

export default App;
