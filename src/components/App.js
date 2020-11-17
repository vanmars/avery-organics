import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import ProductList from './ProductList';

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
        <div id="app-product-list">
          <ProductList />
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;