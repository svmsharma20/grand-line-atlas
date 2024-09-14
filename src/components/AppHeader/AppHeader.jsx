import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <>
      <div className={styles.header_container}>
        <h3 className={styles.header_text}>Grand Line Atlas</h3>
      </div>
    </>
  );
};

export default AppHeader;
