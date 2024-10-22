import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms';
import NavBar from './components/NavBar';
import Home from './pages/Home.jsx';
import Historia from './pages/Historia.jsx';
import Cadastro from './pages/Cadastro.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      {/* <Forms name="Marcos" email="marcos@oemail.com"/> */}
      {/* <Forms/> */}
      {/* <h1>ESTE TEXTO VAI FICAR EM CIMA</h1> */}
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/historia' element={<Historia/>} />
          <Route path='/cadastro' element={<Cadastro/>} />

        </Routes>
      </BrowserRouter>
        <Footer/>


      {/* <h1>ESTE TEXTO VAI FICAR EM BAIXO</h1> */}
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
