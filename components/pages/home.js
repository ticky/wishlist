import { h, Component } from 'preact'; /** jsx h */
import { items, wishlists } from '../../wishlist.yml';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{`Jessica's meta-wishlist`}</h1>
        <pre>{JSON.stringify({items, wishlists})}</pre>
      </div>
    );
  }
}
