import styles from "./Search.module.scss";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { COUNTRY_NAMES } from "../../assets/data/country_names";
import { COUNTRY_CODES } from "../../assets/data/country_code";
import { COUNTRY_CAPITALS } from "../../assets/data/country_capitals";

import { useState } from "react";

const NAME_OPTION = "Name";
const CODE_OPTION = "Code";
const CAPTIAL_OPTION = "Capital";

const searchByOptions = [NAME_OPTION, CODE_OPTION, CAPTIAL_OPTION];

const searchOptions = {
  [NAME_OPTION]: COUNTRY_NAMES,
  [CODE_OPTION]: COUNTRY_CODES,
  [CAPTIAL_OPTION]: COUNTRY_CAPITALS,
};

const Search = () => {
  const [isSearchByMenuVisible, setIsSearchByMenuVisible] = useState(false);
  const [searchByIndex, setSearchByIndex] = useState(0);

  const [searchText, setSearchText] = useState("");

  const handleSearchByMenuSelect = (index) => {
    setSearchByIndex(index);
    setIsSearchByMenuVisible((prevState) => !prevState);
  };

  const handleSearchByHandler = (event) => {
    event.preventDefault();
    setIsSearchByMenuVisible((prevState) => !prevState);
  };

  const handleSearchTextChangeHandler = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const filterBy = (option) => {
    return (
      option.toLowerCase() !== searchText.toLowerCase() &&
      option.toLowerCase().startsWith(searchText.toLowerCase())
    );
  };

  return (
    <>
      <form>
        <div className={styles.container}>
          <div className={styles.dropdown}>
            <div>
              <button
                className={styles.dropdown_btn}
                onClick={handleSearchByHandler}
              >
                Search by <strong>{searchByOptions[searchByIndex]}</strong>
                <svg className={styles.dropdown_icon}>
                  <use
                    xlinkHref={`src/assets/sprite.svg#icon-chevron-small-down`}
                  ></use>
                </svg>
              </button>
            </div>
            {isSearchByMenuVisible && (
              <DropdownMenu
                options={searchByOptions}
                menuItemSelectHandler={handleSearchByMenuSelect}
              />
            )}
          </div>

          <div className={styles.search}>
            <div>
              <input
                type="text"
                className={styles.search_input}
                onChange={handleSearchTextChangeHandler}
              />
              <button className={styles.search_btn}>
                <svg className={styles.search_icon}>
                  <use
                    xlinkHref={`src/assets/sprite.svg#icon-magnifying-glass`}
                  ></use>
                </svg>
              </button>
            </div>
            {searchText.length > 0 && (
              <DropdownMenu
                options={searchOptions[searchByOptions[searchByIndex]]}
                filterBy={filterBy}
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
