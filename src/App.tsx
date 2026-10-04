import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ExcursionsPage from './pages/ExcursionsPage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ReviewsPage from './pages/ReviewsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0d1b14] text-[#f5f0e8]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/excursions" element={<ExcursionsPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
