import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components/Sign-in';
import SignUp from './Components/Sign-up';
import Nav from './Components/Nav/index'
import Home from './Pages/Home'
import Team from './Pages/Team'
import Calendar from './Components/Calendar';
import PageNotFound from './Components/PageNotFound';
import Settings from './Components/Settings';
import { useContext } from 'react'
import { AuthContext} from './context/auth.context'

function App() {

  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className="App">

      { isLoggedIn && 
      <Nav />
      }
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        <Route path="/home" element={<Home />} />
        <Route path='/calendar' element={<Calendar />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/settings' element={<Settings />}></Route>
        

        <Route path="/" element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
