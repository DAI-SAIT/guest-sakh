import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ExcursionsPage from './pages/ExcursionsPage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ReviewsPage from './pages/ReviewsPage';

export type PageType = 'home' | 'excursions' | 'tours' | 'about' | 'contacts' | 'reviews';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'excursions':
        return <ExcursionsPage navigate={navigate} />;
      case 'tours':
        return <ToursPage navigate={navigate} />;
      case 'about':
        return <AboutPage navigate={navigate} />;
      case 'contacts':
        return <ContactsPage navigate={navigate} />;
      case 'reviews':
        return <ReviewsPage navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1b14] text-[#f5f0e8]">
      <ScrollToTop />
      <Header currentPage={currentPage} navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
