import { h } from 'preact'; /** @jsx h */
import { Router } from 'preact-router';
import Home from '../pages/home.mdx';

const Main = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default Main;
