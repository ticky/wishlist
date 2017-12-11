import { h, Component } from 'preact'; /** @jsx h */
import { Router } from 'preact-router';
import Home from '../components/pages/home.js';

const Main = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default Main;
