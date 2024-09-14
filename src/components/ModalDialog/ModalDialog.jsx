import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useRef } from "react";
import styles from "./ModalDialog.module.scss";
import { getCountryDetailsByCode } from "../../api/country_api";
import CountryDetails from "../CountryDetails/CountryDetails";
import { generateParagrah } from "../../http/openrouter";

const ModalDialog = forwardRef((props, ref) => {
  const currentDialogRef = useRef();
  const [data, setData] = useState();
  const [details, setDetails] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (props.text !== undefined && props.text.length > 0) {
        const data = await getCountryDetailsByCode(props.text);
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
