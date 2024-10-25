import React from "react";
import HomePage from "./pages/index";
import { createRoot } from 'react-dom/client';

const App = () => {
  return <HomePage />;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// 添加这段代码以支持热更新
if (module.hot) {
  module.hot.accept();
}
