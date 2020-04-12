import React from "react";
import Icon from "./Icon";
import Header from "./Header";
import Sidebar from "./Sidebar";

import css from "../styles/Layout.module.scss";

export default function Layout(props) {
  return (
    <div className={css.page_wrapper}>
      <main className={css.main}>
        <div className={css.content}>
          <div className={css.container}>{props.children}</div>
        </div>
        <section className={css.wrapper}>
          <Header />
        </section>
        <Sidebar />
      </main>

      <footer>
        <p>Copyright © 2019 Jifcast.com All rights reserved.</p>
      </footer>
    </div>
  );
}
