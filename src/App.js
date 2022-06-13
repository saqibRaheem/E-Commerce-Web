
import './App.css';
import Home from './component]/Home';
import Nav from './component]/Nav';
import {Routes , Route} from 'react-router-dom'
import Product from './component]/Product';
import Contact from './component]/Contact';
import About from './component]/About';
import Products from './component]/Products';


function App() {
  return (
    <>
      <Nav/>
       <Routes>
         <Route exect path="/" element={<Home/>}/>
         <Route exect path="/about" element={<About/>}/>
         <Route exect path="/contact" element={<Contact/>}/>
         <Route exect path="/product" element={  <Product/>}/>
         <Route exect path="/products/:id" element={<Products/>}/>
       </Routes>
      
    
    </>
  );
}

export default App;
