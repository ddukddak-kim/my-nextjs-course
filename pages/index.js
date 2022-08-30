import { Fragment } from 'react';

function HomePage() {
  return (
    <Fragment>
      <h1>Hello Next World</h1>
      <ul>
        <li>
          <a href="/news/article-no-1">article-no-1</a>
        </li>
        <li>article-no-2</li>
        <li>article-no-3</li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
