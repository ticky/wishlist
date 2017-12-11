import { h } from 'preact'; /** jsx h */
import { wishlists, things } from '../../wishlist.yml';

import ExternalWishlist from '../ExternalWishlist';
import Thing from '../Thing';

export default () => {
  return (
    <div>
      <h1>Jessica’s meta-wishlist</h1>
      <h2>Other Lists</h2>
      <ul>
        {wishlists.map((wishlist) => <ExternalWishlist list={wishlist} />)}
      </ul>
      <h2>Things</h2>
      <p>Anything which doesn’t go on a list elsewhere can live here.</p>
      <ul>
        {things.map((thing) => <Thing thing={thing} />)}
      </ul>
    </div>
  );
}
