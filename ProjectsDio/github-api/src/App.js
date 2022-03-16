import { useContext, useState } from 'react'
import { Context } from './utils/Context'


import { Header } from './components/Header/'
import { Projects } from './components/Projects'
import { Input } from './components/Input'


const App = () => {

  const [dataUser, setDataUser] = useState(null)
  const [userRepos, setUserRepos] = useState([])
  const [userStar, setUSerStar] = useState([])

  return (
    <Context.Provider value={{
      dataUser,
      setDataUser,
      userRepos,
      setUserRepos,
      userStar,
      setUSerStar
    }}>
      <Input />
      <Header />
      <Projects />
    </Context.Provider>
  )
}

export default App;
