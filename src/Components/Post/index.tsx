import styles from "./styles.module.css";

export const Post = () => {
  return (
    <section>
      <div className={styles.post_Owner_Container}>
        <div className={styles.post_Owner}>
          <div className={styles.imgContainer}>
            <img
              src="https://avatars.githubusercontent.com/u/59975691?v=4"
              alt="Foto do criador do post"
            />
          </div>
          <div className={styles.post_Owner_info}>
            <strong>Leo Valle</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <span className={styles.publicated_At}>Públicado há 1h</span>
      </div>
    </section>
  );
};
