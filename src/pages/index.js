import React, { useState } from "react";
import ReactFeatures, { ThemeContext } from "../components/ReactFeatures";

const HomePage = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#222', color: theme === 'light' ? '#000' : '#fff', minHeight: '100vh' }}>
        <h1>Welcome to the React Features Demo</h1>
        <ReactFeatures />
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
