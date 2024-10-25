import React, { useState, useEffect, useContext, useRef, useCallback, useMemo } from 'react';

// 创建一个 Context
export const ThemeContext = React.createContext({ theme: 'light', toggleTheme: () => {} });

// 创建一个自定义 Hook
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const increment = useCallback(() => setCount(prev => prev + 1), []);
  return { count, increment };
}

function ReactFeatures() {
  // 使用 useState
  const [text, setText] = useState('');

  // 使用自定义 Hook
  const { count, increment } = useCounter();

  // 使用 useRef
  const inputRef = useRef(null);

  // 使用 useEffect
  useEffect(() => {
    console.log('Component mounted or text changed');
    return () => console.log('Component will unmount or text will change');
  }, [text]);

  // 使用 useMemo
  const expensiveComputation = useMemo(() => {
    console.log('Performing expensive computation');
    return count * 2;
  }, [count]);

  // 使用 Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h2>React Features Demo</h2>
      
      <h3>useState and Controlled Input</h3>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>

      <h3>useCounter (Custom Hook) and useCallback</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      <h3>useRef and DOM Manipulation</h3>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      <h3>useMemo</h3>
      <p>Expensive Computation Result: {expensiveComputation}</p>

      <h3>useContext</h3>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ReactFeatures;
