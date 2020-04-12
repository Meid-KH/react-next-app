import React, { Component } from "react";

import css from "../styles/PlayItem.module.scss";
import Icon from "../components/Icon";

class PlayItem extends Component {
  render() {
    const {
      name,
      title,
      description,
      progress,
      likes,
      songs,
      options,
    } = this.props;

    return (
      <li className={css.play_item} data-options={options}>
        {options && (
          <button className={css.button_option}>
            <Icon name="options" />
          </button>
        )}
        <div className={css.thumb}>
          <img src="./playlist-2.png" alt="JRE MMA Show #75 with Dan Hardy" />
        </div>
        <div className={css.detail}>
          <div className={css.desc_outer}>
            <small className={css.name}> {name} </small>
            <span className={css.title}> {title} </span>
            <p className={css.desc}>{description}</p>
          </div>
          <div className={`${css.play_options} `}>
            <div className={css.play_actions}>
              <div className={css.action}>
                <Icon name="heart" />
                <span>{likes}</span>
              </div>
              <div className={css.action}>
                <Icon name="headset-2" />
                <span>{songs}</span>
              </div>
              <div className={css.action}>
                <Icon name="cloud" />
              </div>
            </div>
            {progress && (
              <div className={css.pregress_bar}>
                <div
                  style={{ width: `${progress}%` }}
                  className={css.progress}
                ></div>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  }
}

export default PlayItem;
