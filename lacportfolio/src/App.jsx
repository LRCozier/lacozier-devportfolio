import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Homepage from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import TopScroll from './components/Layouts/topscroll';

const App = () => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_HYGRAPH_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <TopScroll />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </ApolloProvider>
  );
}

export default App;