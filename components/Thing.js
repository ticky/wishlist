import { h } from 'preact'; /** jsx h */

const renderLinks = (links) => links.reduce((acc, url, number) => {
  const { hostname } = new URL(url);

  const newLink = [
    <a key={acc.length + 1} href={url}>
      {hostname.replace(/^www\./, '')}
    </a>
  ];

  if (number < links.length - 1) {
    newLink.push(', ');
  }

  return acc.concat(newLink);
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
          {content} ({renderLinks(thing.link)})
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