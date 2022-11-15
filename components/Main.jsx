import styles from "../styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export function Main(props) {
  console.log(props);
  return (
    <main className={styles.main}>
      <Headline page={props.page} onClick={() => alert("クリックしました。")}>
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
