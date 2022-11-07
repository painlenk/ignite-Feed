import { Divider } from "../Divider";
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

        <time
          title="11 de maio as 08:13h"
          dateTime="2022-05-11 08:13:30"
          className={styles.publicated_At}
        >
          Públicado há 1h
        </time>
      </div>

      <div className={styles.content_Container}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href=""> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <Divider />

      <div className={styles.comment_Container}>
        <span>Deixe seu feedback</span>

        <textarea className={styles.comment_Area} />

        <div className={styles.publish_Comment}>Publicar</div>
      </div>
    </section>
  );
};
