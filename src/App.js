import React from 'react';

import './App.css';

import Navbar from './Navbar';
import Donate from './Donate';
import About from './About';
import Service from './Service';
import ProfileSection from './ProfileSection';

import TimeLine from '../src/components/Timeline';




function App() {
  return (
    <div className="App">
      <Navbar />
      <TimeLine />
      <Donate />
      <ProfileSection />
      <About />
      <Service />
    </div>
  );
}

export default App;
