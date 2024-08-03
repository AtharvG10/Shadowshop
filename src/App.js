
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/Contact.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Addproducts from './components/admin/Addproducts';
import Products from './components/admin/Products';
import Shoes from './components/Shoes';
import Sidebar from './components/Sidebar';
import Recents from './components/Recents';



function App() {
  return (

    <>
     <BrowserRouter>
     <Header/>
          <Routes>
         
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/gallery' element={  <Gallery/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>


            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/addpro' element={<Addproducts/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            





            <Route path='/shoes' element={<Shoes/>}></Route>


            <Route path='/side' element={<Sidebar/>}></Route>


            <Route path='/recents' element={<Recents/>}></Route>
            
            
          </Routes>
          <Footer/>
     </BrowserRouter>
      
      
      
    
      

    

      

      
     

    </>
    
  );
}

export default App;
