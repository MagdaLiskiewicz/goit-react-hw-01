import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(css.profileContainer)}>
      <div>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
