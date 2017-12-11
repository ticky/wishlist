import { h } from 'preact'; /** jsx h */

const renderLinks = (links) => links.reduce((acc, url, number) => {
  const { hostname } = new URL(url);
  return acc.join([
    <a key={a} href={url}>
      {hostname}
    </a>
  ]);
}, [])

export default ({thing}) => {
  let content = (
    <strong>
      {thing.name}
    </strong>
  );

  if (thing.link) {
    if (Array.isArray(thing.link)) {
      content = (
        <span>
          {content} ({})
        </span>
      );
    } else {
      content = (
        <a href={thing.link}>
          {content}
        </a>
      );
    }
  }

  return (
    <li>
      {content}
      {thing.notes && (
        <p style="margin: 0">
          {thing.notes}
        </p>
      )}
    </li>
  );
};