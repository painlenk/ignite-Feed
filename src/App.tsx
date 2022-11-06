import { Header } from "./Components/Header";
import { Profile } from "./Components/Profile";
import "./styles.css";
import styles from "./app.module.css";
import { Post } from "./Components/Post";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <div className={styles.profile}>
          <Profile />
        </div>

        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
