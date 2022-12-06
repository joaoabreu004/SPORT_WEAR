import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Calcados from './Pages/Calcados'
import Acessorios from './Pages/Acessorios'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Artigos from './Pages/Artigos';
import Vestuario from './Pages/Vestuario';
import AdminProdutos from './Pages/Admin/AdminProdutos';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/admin/produtos' element={<AdminProdutos/>}></Route>
        </Routes>
        <Routes>
          
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/vestuario' element={<Vestuario/>}></Route>
          <Route path='/calcados' element={<Calcados/>}></Route>
          <Route path='/acessorios' element={<Acessorios/>}></Route>
          <Route path='/artigos' element={<Artigos/>}></Route>
        </Routes>
        <Footer />

      </Router>

    </div>

  )
}

export default App;
