import styles from "./ModalDialog.module.scss";

const ModalDialog = (props) => {
  return (
    <>
      <dialog>{props.text}</dialog>
    </>
  );
};

export default ModalDialog;
