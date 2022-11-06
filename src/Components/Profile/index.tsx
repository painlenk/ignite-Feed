import { PencilSimpleLine } from "phosphor-react";
import styles from "./styles.module.css";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/59975691?v=4"
            alt="Foto do usuário"
          />
        </div>

        <strong>Leo Valle</strong>
        <span>Front-End Developer</span>
      </div>

      <div className={styles.footer}>
        <div>
          <a href="#">
            <PencilSimpleLine size={20} />
            <span>Editar seu perfil</span>
          </a>
        </div>
      </div>
    </div>
  );
};
