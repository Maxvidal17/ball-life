import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components';
import Nav from './Components/Nav/index'
import Home from './Pages/Home'
import Team from './Pages/Team'
import Calendar from './Components/Calendar';
import PageNotFound from './Components/PageNotFound';
import Settings from './Components/Settings';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='sign-in' element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path='calendar' element={<Calendar />}/>
        <Route path='team' element={<Team />}/>
        <Route path='settings' element={<Settings />}></Route>

        <Route path="/" element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
