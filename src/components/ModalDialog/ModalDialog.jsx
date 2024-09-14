import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";
import styles from "./ModalDialog.module.scss";

const ModalDialog = forwardRef((props, ref) => {
  const currentDialogRef = useRef();

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
        {props.text}
        <form>
          <button className={styles.close_btn}>
            <svg className={styles.close_icon}>
              <use xlinkHref={`src/assets/symbol-defs.svg#icon-cross`}></use>
            </svg>
          </button>
        </form>
      </dialog>
    </>
  );
});

export default ModalDialog;
