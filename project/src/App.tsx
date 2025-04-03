import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Home } from './components/Home';

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;