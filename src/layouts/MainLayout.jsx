import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/common/ScrollProgressBar';
import { refreshScrollTriggers } from '../utils/gsapSetup';

export default function MainLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    refreshScrollTriggers();
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#18181B] relative">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

