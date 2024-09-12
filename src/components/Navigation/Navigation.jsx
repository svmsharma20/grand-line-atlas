import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigation_item}>
          <a href="#" className={styles.navigation_link}>
            Home
          </a>
        </li>
        <li className={styles.navigation_item}>
          <a href="#" className={styles.navigation_link}>
            Map
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
