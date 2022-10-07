import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
