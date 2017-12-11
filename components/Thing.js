import { h } from 'preact'; /** jsx h */

export default ({thing}) => {
  let heading = (
    <strong>
      {thing.name}
    </strong>
  );

  if (thing.link) {
    heading = (
      <a href={thing.link}>
        {heading}
      </a>
    );
  }

  return (
    <li>
      {heading}
      {thing.notes && (
        <p style="margin: 0">
          {thing.notes}
        </p>
      )}
    </li>
  );
};