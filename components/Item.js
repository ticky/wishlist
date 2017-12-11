import { h, Component } from 'preact'; /** jsx h */


export default ({item}) => {
  let heading = (
    <strong>
      {item.name}
    </strong>
  );

  if (item.link) {
    heading = (
      <a href={item.link}>
        {heading}
      </a>
    );
  }

  return (
    <li>
      {heading}
      {item.notes && <p>{item.notes}</p>}
    </li>
  );
};