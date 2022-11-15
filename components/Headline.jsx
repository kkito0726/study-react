import styles from "../styles/Home.module.css";

export function Headline(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">{props.page} Page</a>
      </h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
      <button onClick={props.onClick}>クリックボタン</button>
    </div>
  );
}
