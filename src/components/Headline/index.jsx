import classes from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  console.log(props);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Welcome to <a href="https://nextjs.org">{props.page} Page</a>
      </h1>

      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
      <button onClick={props.onClick}>クリックボタン</button>
    </div>
  );
}
