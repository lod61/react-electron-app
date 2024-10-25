import React from "react";
import HomePage from "./pages/index";

const App = () => {
  return <HomePage />;
};

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
