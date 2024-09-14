import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useRef } from "react";
import styles from "./ModalDialog.module.scss";
import {
  getCodeFromCapitalName,
  getCodeFromCountryName,
  getCountryDetailsByCode,
} from "../../api/country_api";
import CountryDetails from "../CountryDetails/CountryDetails";
import { generateParagrah } from "../../http/openrouter";
import { CAPTIAL_OPTION, CODE_OPTION, NAME_OPTION } from "../Search/Search";

const ModalDialog = forwardRef((props, ref) => {
  const currentDialogRef = useRef();
  const [data, setData] = useState();
  const [details, setDetails] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (props.text !== undefined && props.text.length > 0) {
        let code = "";
        if (props.searchBy === NAME_OPTION) {
          code = getCodeFromCountryName(props.text);
        }

        if (props.searchBy === CODE_OPTION) {
          code = props.text;
        }

        if (props.searchBy === CAPTIAL_OPTION) {
          code = getCodeFromCapitalName(props.text);
        }

        const data = await getCountryDetailsByCode(code);
        const details = await generateParagrah(data);
        setData(data);
        setDetails(details);
        setIsLoading(false);
      }
    };
    fetch();
  }, [props.text]);

  useImperativeHandle(ref, () => {
    return {
      openDialog() {
        currentDialogRef.current.showModal();
      },
    };
  });

  return (
    <>
      <dialog ref={currentDialogRef} className={styles.modal_container}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <div>
            {data && details && (
              <CountryDetails data={data} details={details} />
            )}
            <form>
              <button className={styles.close_btn}>
                <svg className={styles.close_icon}>
                  <use
                    xlinkHref={`src/assets/symbol-defs.svg#icon-cross`}
                  ></use>
                </svg>
              </button>
            </form>
          </div>
        )}
      </dialog>
    </>
  );
});

export default ModalDialog;
