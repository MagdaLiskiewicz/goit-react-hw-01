import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(css.profileContainer)}>
      <div className={css.profileInfo}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p class={css.name}>{name}</p>
        <p class={css.info}>@{tag}</p>
        <p class={css.info}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
