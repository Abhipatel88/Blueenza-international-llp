import React, { useState, useEffect } from 'react';
import SVGPreloader from './SVGPreloader';

const PreloaderDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SVGPreloader />;
  }

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Welcome! Your site has loaded successfully.</h1>
      <p>The preloader animation is complete.</p>
      <button 
        onClick={() => setIsLoading(true)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#023765',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Show Preloader Again
      </button>
    </div>
  );
};

export default PreloaderDemo;