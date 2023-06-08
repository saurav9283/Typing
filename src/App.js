import './App.css';
import LandingPage from './Component/Loading';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/typing' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
