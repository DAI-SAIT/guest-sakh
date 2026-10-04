import { NavProvider, useNav } from './context/NavContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExcursionsPage from './pages/ExcursionsPage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ReviewsPage from './pages/ReviewsPage';

function AppContent() {
  const { currentPage } = useNav();

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'excursions': return <ExcursionsPage />;
      case 'tours': return <ToursPage />;
      case 'about': return <AboutPage />;
      case 'contacts': return <ContactsPage />;
      case 'reviews': return <ReviewsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1b14] text-[#f5f0e8]">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <NavProvider>
      <AppContent />
    </NavProvider>
  );
}

export default App;
