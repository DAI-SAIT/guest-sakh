import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type PageType = 'home' | 'excursions' | 'tours' | 'about' | 'contacts' | 'reviews';

interface NavContextType {
  currentPage: PageType;
  navigate: (page: PageType) => void;
}

const NavContext = createContext<NavContextType>({
  currentPage: 'home',
  navigate: () => {},
});

export function NavProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigate = useCallback((page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <NavContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}
