import Home from './views/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import AboutUs from './views/aboutUs';
import ContactPage from './views/Contact';
import Ubication from './views/Ubicación';
import Workplace from './views/Taller';
import Services from './views/Servicios';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<AboutUs/>} path="/quienessomos"/>
        <Route element={<Services/>} path='/servicios' />
        <Route element={<Workplace/>} path="/nuestrotaller"/>
        <Route element={<Ubication/>} path='/ubicacion'/>
        <Route element={<ContactPage/>} path='/contacto'/>
      </Routes>
    </BrowserRouter>
  );
};
 
export default App;
