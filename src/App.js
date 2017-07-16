import { Component } from 'preact';
import { Router } from 'preact-router';

const Main = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    // Advanced is an optional query 
    //<Search path="/search/:query/:advanced?" />
  </Router>
);

export default Main;
