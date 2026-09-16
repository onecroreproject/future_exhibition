import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Exhibitors from './pages/Exhibitors';
import Visitors from './pages/Visitors';
import Media from './pages/Media';
import Banking from './pages/Banking';
import Venue from './pages/Venue';
import Participants from './pages/Participants';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exhibitors" element={<Exhibitors />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/media" element={<Media />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
