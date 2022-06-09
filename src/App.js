
import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './components/home/home';
import About from './components/about/aboutus';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contactus';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
