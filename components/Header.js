import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

import Icon from "../components/Icon";

import css from "../styles/Header.module.scss";

class Header extends Component {
  render() {
    return (
      <header className={css.header}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className={css.container}>
          <div className={css.header_inner}>
            <Link href="/inner-page">
              <a className={css.logo}>jifcast</a>
            </Link>
            <nav className={css.menu_nav}>
              <Link href="https://www.google.com">
                <a className={css.menu_nav_item} target="_blank">
                  <Icon name="refresh" />
                  <span>refresh</span>
                </a>
              </Link>
              <Link href="https://www.yahoo.com">
                <a className={css.menu_nav_item} target="_blank">
                  <Icon name="mic" />
                  <span>discover</span>
                </a>
              </Link>
              <Link href="https://www.amazon.com">
                <a className={css.menu_nav_item} target="_blank">
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
