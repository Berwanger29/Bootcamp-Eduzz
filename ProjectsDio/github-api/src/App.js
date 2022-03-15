import { useContext, useState } from 'react'
import { Context } from './utils/Context'


import { Header } from './components/Header/'
import { Projects } from './components/Pojects'
import { Input } from './components/Input'


const App = () => {

  const [url, setUrl] = useState('https://api.github.com/users/')

  return (
    <Context.Provider value={{url, setUrl}}>
      <Input />
      <Header />
      <Projects />
    </Context.Provider>
  )
}

export default App;
