import './app.css'
import { useContext } from 'react'
import { UserContext } from './context/userContext'
import { Routes, Route } from 'react-router-dom'
import { IndexPage, SignUp, GroupsContainer, MatchesContainer, EliminatoriasContainer, MyProde, MyFriends, MyProdeEliminatoriasContainer } from './components'
import Navbar from './components/Navbar'

function App() {

  const { user } = useContext(UserContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/signup/:query' element={<SignUp />} />
        <Route path='/groups' element={<GroupsContainer />}/>
        <Route path='/GroupFixture' element={<MatchesContainer />}/>
        <Route path='/GroupFixture/:group' element={<MatchesContainer />}/>
        <Route path='/EliminatoriasFixture' element={<EliminatoriasContainer />}/>
        <Route path='/miFixture/grupos' element={<MyProde />} />
        <Route path='/miFixture/eliminatorias' element={<MyProdeEliminatoriasContainer />}/>
        <Route path='/puntajes' element={<MyFriends />} />
      </Routes>
    </>
  )
}

export default App
