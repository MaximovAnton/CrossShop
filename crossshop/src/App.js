import React from 'react'
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <Content />
    </div>
  );
}

export default App;
