import "./Info.css"
import styles from "./Info.module.css"

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello</h1>
      <button className={styles.myOtherButton}>Click</button>
    </div>
  );
}

export default Info;
