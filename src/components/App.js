import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import ProductList from './ProductList';
import SeasonalProduce from './SeasonalProduce';

function App() {
  return (
    <React.Fragment>
      <div id="app-header">
        <Header />
      </div>
      <div id="app-body">
        <div id="app-schedule">
          <Schedule />
        </div>
        <div id="app-tagline">
          <p>"GM...No!" - Co-Founder, Brycen Bartolome Avery</p>
        </div>
        <div id="app-product-list">
          <ProductList />
        </div>
      </div>
      <div id="app-footer">
        <div id="app-footer-bar">
          <p>Copyright 2020, Avery Organics</p>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;