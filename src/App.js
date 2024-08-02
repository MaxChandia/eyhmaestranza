import Home from './views/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './views/aboutUs';
import ContactPage from './views/Contact';
import Workplace from './views/Taller';
import Services from './views/Servicios';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AboutUs/>} path='/quienessomos'/>
        <Route element={<Services/>} path='/servicios' />
        <Route element={<Workplace/>} path='/nuestrotaller'/>
        <Route element={<ContactPage/>} path='/contacto'/>
      </Routes>
    </BrowserRouter>
  );
};
 
export default App;
