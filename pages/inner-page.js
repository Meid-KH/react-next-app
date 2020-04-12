import React, { Component } from "react";
import Link from "next/link";

import css from "../styles/Page.module.scss";

class InnerPage extends Component {
  render() {
    return (
      <div className={css.page2}>
        <h1>Here is Page 2</h1>
        <p>
          This is page 2 description. This is page 2 description. This is page 2
          description. This is page 2 description. This is page 2 description.
          This is page 2 description. This is page 2 description. This is page 2
          description. This is page 2 description. This is page 2 description.
          This is page 2 description. This is page 2 description. This is page 2
          description. This is page 2 description. This is page 2 description.
          This is page 2 description. This is page 2 description. This is page 2
          description. This is page 2 description.
        </p>
        <ul>
          <li>
            <Link href="https://www.facebook.com">
              <a target="_blank">LINK 1</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com">
              <a target="_blank">LINK 1</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.twitter.com">
              <a target="_blank">LINK 1</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default InnerPage;
