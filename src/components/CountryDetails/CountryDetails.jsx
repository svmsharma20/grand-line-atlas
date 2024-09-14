import styles from "./CountryDetails.module.scss";

const CountryDetails = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.container_header}>{props.data.name}</h3>
        <hr className={styles.solid_line} />
        <p> {props.details.choices[0].message.content}</p>
      </div>
    </>
  );
};

export default CountryDetails;
