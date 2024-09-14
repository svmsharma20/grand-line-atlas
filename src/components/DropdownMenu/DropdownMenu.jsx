import styles from "./DropdownMenu.module.scss";

const DropdownMenu = (props) => {
  const handleMenuSelect = (event) => {
    const optionVal = parseInt(event.target.getAttribute("data-id"));
    props.menuItemSelectHandler(optionVal);
  };

  const filterBy = props.filterBy ? props.filterBy : () => true;
  const options = [];
  props.options.filter(filterBy).map((option, index) => {
    return options.push(
      <li
        data-id={index}
        key={index}
        className={styles.dropdown_list_item}
        onClick={handleMenuSelect}
      >
        {option}
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
