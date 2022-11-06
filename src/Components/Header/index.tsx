import logo from "../../assets/logo.svg";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Ignite Feed logo" />
        <strong>Ignite Feed</strong>
      </div>
    </div>
  );
};
