import styles from "./Search.module.scss";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

const dropdown_item_active =
  styles.dropdown_item + " " + styles.dropdown_item_active;
const dropdown_item = styles.dropdown_item;

const Search = () => {
  const handleMenuSelect = (event) => {
    console.log(event);
  };

  return (
    <>
      <form>
        <div className={styles.container}>
          <div>
            <Dropdown>
              <Dropdown.Toggle className={styles.dropdown}>
                Search by Name
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.dropdown_menu}>
                <Dropdown.Item
                  className={dropdown_item_active}
                  eventKey="1"
                  active
                  onClick={handleMenuSelect}
                >
                  Name
                </Dropdown.Item>
                <Dropdown.Item className={dropdown_item} eventKey="2">
                  Capital
                </Dropdown.Item>
                <Dropdown.Item className={dropdown_item} eventKey="3">
                  Code
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.search}>
            <input type="text" className={styles.search_input} />
            <button className={styles.search_btn}>
              <svg className={styles.search_icon}>
                <use
                  xlinkHref={`src/assets/sprite.svg#icon-magnifying-glass`}
                ></use>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
