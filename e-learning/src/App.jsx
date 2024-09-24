import React from 'react'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services /> 
      <Banner />    
      <Subscribe />
    </main>
  );
}

export default App