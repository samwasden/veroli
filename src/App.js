import React from 'react';
import './stylesheets/Reset.css'
import './App.css';
import { Route } from 'react-router';
import Home from './components/Home';
import Bio from './components/Bio';
import Lyrics from './components/Lyrics';
import More from './components/More';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/lyrics" component={Lyrics} />
      <Route exact path="/more" component={More} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
