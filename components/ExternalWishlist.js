import { h } from 'preact'; /** jsx h */

export default ({list}) => {
  let heading = list.name;

  if (list.link) {
    heading = (
      <a href={list.link}>
        {heading}
      </a>
    );
  }

  return (
    <li>
      {heading}
    </li>
  );
};