import { h, Component } from 'preact'; /** jsx h */
import { items, wishlists } from '../../wishlist.yml';

import Item from '../Item';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{`Jessica's meta-wishlist`}</h1>
        <h2>Other Lists</h2>
        <ul>
          {wishlists.map((item) => <Item item={item} />)}
        </ul>
        <h2>Things I Want</h2>
        <ul>
          {items.map((item) => <Item item={item} />)}
        </ul>
      </div>
    );
  }
}
