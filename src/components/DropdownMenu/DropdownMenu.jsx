import styles from "./DropdownMenu.module.scss";

const DropdownMenu = (props) => {
  const handleMenuSelect = (event) => {
    const key = event.target.getAttribute("data-id");
    props.menuItemSelectHandler(key);
  };

  const filterByMethod = props.filterBy ?? (() => true);
  const options = [];
  Object.entries(props.options)
    .filter(filterByMethod)
    .map((option) => {
      const [key, value] = option;
      return options.push(
        <li
          data-id={key}
          key={key}
          className={styles.dropdown_list_item}
          onClick={handleMenuSelect}
        >
          {value}
        </li>
      );
    });

  if (options.length > 0) {
    return (
      <div className={styles.dropdown_menu}>
        <ul className={styles.dropdown_list}>{options}</ul>
      </div>
    );
  }

  return <></>;
};

export default DropdownMenu;
