import React, { Component } from "react";

import PlayItem from "../components/PlayItem";
import css from "../styles/Sidebar.module.scss";
import Icon from "./Icon";

class Sidebar extends Component {
  render() {
    return (
      <aside className={css.sidebar}>
        <div className={css.title}>
          Downloads
          <button className={css.download_button}>
            <Icon name="download" />
            {/* <small className="badge">16</small> */}
          </button>
        </div>
        <div className={css.sidebar_inner}>
          <ul>
            <PlayItem
              name="myfavoritemurder"
              title="MFM Minisode 13"
              description="How to solve a murder and why you probably won’t. "
              likes="43"
              songs="87"
              options
            />
            <PlayItem
              name="myfavoritemurder"
              title="MFM Minisode 13"
              description="How to solve a murder and why you probably won’t. "
              likes="43"
              songs="87"
              options
            />
            <PlayItem
              name="myfavoritemurder"
              title="MFM Minisode 13"
              description="How to solve a murder and why you probably won’t. "
              likes="43"
              songs="87"
              options
            />
            <PlayItem
              name="myfavoritemurder"
              title="MFM Minisode 13"
              description="How to solve a murder and why you probably won’t. "
              likes="43"
              songs="87"
              options
            />
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
