import Home from './views/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './views/aboutUs';
import ContactPage from './views/Contact';
import Workplace from './views/Taller';
import Services from './views/Servicios';
import ScrollToTop from './components/scrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AboutUs/>} path='/quienes-somos'/>
        <Route element={<Services/>} path='/servicios' />
        <Route element={<Workplace/>} path='/nuestro-taller'/>
        <Route element={<ContactPage/>} path='/contacto'/>
      </Routes>
    </BrowserRouter>
  );
};
 
export default App;
