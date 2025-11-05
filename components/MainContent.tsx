import React, { useState, useEffect } from 'react';
import WelcomePage from './WelcomePage';
import Layout from './Layout';

interface MainContentProps {
  onLogout: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ onLogout }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000); // Show welcome animation for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return showWelcome ? <WelcomePage /> : <Layout onLogout={onLogout} />;
};

export default MainContent;