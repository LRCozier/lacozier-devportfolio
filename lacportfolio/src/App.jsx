import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopScroll from './components/Layouts/topscroll';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Homepage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import NotFound from './pages/notfound';


const App = () => {

  return (
    <BrowserRouter basename="/lacozier-devportfolio">
    <TopScroll/>
     <Navbar />
      <main className='main-content'>
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </main>
     <Footer />
  </BrowserRouter>
  );
}

export default App;
