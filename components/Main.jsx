import classes from "./Main.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export function Main(props) {
  console.log(props);
  return (
    <main className={classes.main}>
      <Headline page={props.page} onClick={() => alert("クリックしました。")}>
        <code className={classes.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
