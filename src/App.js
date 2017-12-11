import { h } from 'preact'; /** @jsx h */
import { Router } from 'preact-router';
import Home from '../components/pages/home.js';
// import Home2 from '../components/pages/home.mdx';

const Main = () => (
  <Router>
    <Home path="/" />
    // <Home2 path="/2" />
  </Router>
);

export default Main;
