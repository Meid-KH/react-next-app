import React, { Component } from "react";
import Link from "next/link";

import Icon from "../components/Icon";

import css from "../styles/Header.module.scss";

class Header extends Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.header_inner}>
            <Link href="/page-2">
              <a className={css.logo}>jifcast</a>
            </Link>
            <nav className={css.menu_nav}>
              <Link href="/">
                <a className={css.menu_nav_item}>
                  <Icon name="refresh" />
                  <span>refresh</span>
                </a>
              </Link>
              <Link href="/">
                <a className={css.menu_nav_item}>
                  <Icon name="mic" />
                  <span>discover</span>
                </a>
              </Link>
              <Link href="/">
                <a className={css.menu_nav_item}>
                  <Icon name="headset" />
                  <span>notifications</span>
                  <small className={css.badge}>12</small>
                </a>
              </Link>
              <Link href="/">
                <a className={css.menu_nav_item}>
                  <img src="./avatar.png" alt="Uer" />
                  <span>username</span>
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
