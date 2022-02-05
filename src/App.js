import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import {productData, productDataTwo, productDataThree} from './components/Products/data';
import Products from './components/Products';
import Feature from './components/Feature';
//import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <section id='consoles'>
        <Products heading='Consoles' data={productData}/>
      </section>
      <Feature />
      <section id='games'>
        <Products heading='Games' data={productDataTwo}/>
      </section>
      <section id='accessories'>
        <Products heading='Accessories' data={productDataThree}/>
      </section>
    </Router>
  );
}

export default App;
