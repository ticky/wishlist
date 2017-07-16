import { h, Component } from 'preact'; /** @jsx h */
import { Router } from 'preact-router';
import Home from '../components/pages/home.js';
import About from '../components/pages/about.js';

const Main = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    // Advanced is an optional query 
  </Router>
);
    //<Search path="/search/:query/:advanced?" />

export default Main;
