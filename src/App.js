//You need to import React in every component file
import React from 'react';
import Nav from './components/Nav'
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        {/* components look like any other JSX element, using PascalCase can help you distinguish */}
        <About></About>
      </main>
    </div>
  );
}

export default App;
