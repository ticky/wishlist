import { Component } from 'preact';
import { Link } from 'preact-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>shed-preact</h1>
        <p>To remix this project visit <a href="https://glitch.com/~shed-preact">https://glitch.com/~shed-preact</a></p>
        <p>Here's a link to the <Link href="/about">About page</Link></p>
      </div> 
    );
  }
}
