import { useState, useEffect } from 'react';
import type { PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  navigate: (page: PageType) => void;
}

export default function Header({ currentPage, navigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { page: PageType; label: string }[] = [
    { page: 'home', label: 'Главная' },
    { page: 'excursions', label: 'Экскурсии' },
    { page: 'tours', label: 'Туры' },
    { page: 'about', label: 'О нас' },
    { page: 'reviews', label: 'Отзывы' },
    { page: 'contacts', label: 'Контакты' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-dark py-3' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c8a45c] to-[#a8843c] flex items-center justify-center">
              <span className="font-display text-[#0d1b14] font-bold text-lg">ГС</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-sm tracking-wider text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">
                ГОСТЕПРИИМНЫЙ
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-[#c8a45c] uppercase">
                Сахалин
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.page}
                onClick={() => navigate(link.page)}
                className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 relative group ${
                  currentPage === link.page
                    ? 'text-[#c8a45c]'
                    : 'text-[#f5f0e8]/80 hover:text-[#c8a45c]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#c8a45c] transition-all duration-300 ${
                  currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+79004885555" className="text-sm text-[#f5f0e8]/70 hover:text-[#c8a45c] transition-colors">
              +7 (900) 488-55-55
            </a>
            <button onClick={() => navigate('tours')} className="btn-primary text-sm px-6 py-2.5">
              Забронировать
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-[2px] bg-[#c8a45c] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`w-6 h-[2px] bg-[#c8a45c] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-[#c8a45c] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[60px] bg-[#0d1b14]/98 backdrop-blur-xl transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              className={`text-2xl font-display tracking-wide transition-colors ${
                currentPage === link.page ? 'text-[#c8a45c]' : 'text-[#f5f0e8]/80'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+79004885555" className="mt-4 text-[#c8a45c] text-lg">
            +7 (900) 488-55-55
          </a>
          <button onClick={() => navigate('tours')} className="btn-primary mt-4">
            Забронировать тур
          </button>
        </nav>
      </div>
    </header>
  );
}
