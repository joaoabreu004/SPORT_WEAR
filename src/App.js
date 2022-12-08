import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Home from  "./pages/Home";
import Calcados from './pages/Calcados'
import Acessorios from './pages/Acessorios'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Artigos from './pages/Artigos';
import Vestuario from './pages/Vestuario';
import AdminProdutos from './pages/Admin/AdminProdutos';
import NovoProduto from './pages/Admin/NovoProduto';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/admin/produtos' element={<AdminProdutos/>}></Route>
          <Route path='/admin/produtos/novo' element={<NovoProduto/>}></Route>
          <Route path='/admin/produtos/novo/:id' element={<NovoProduto/>}></Route>
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
