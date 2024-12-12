
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Designer from './Pages/Designer';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Content from './components/Content/Content'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar>
      <Routes>
        <Route path='/' element={<Designer/>}/>
        <Route path='/clothing' element={<Category category="clothing"/>}/>
        <Route path='/shoes' element={<Category category="shoes"/>}/>
        <Route path='/handbags' element={<Category category="handbags"/>}/>
        <Route path='/jewelry' element={<Category category="jewelry"/>}/>
        <Route path='/accessories' element={<Category category="accessories"/>}/>
        <Route path='/clearance' element={<Category category="clearance"/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </Navbar></BrowserRouter>
      <Content></Content>
    </>
  )
}

export default App
