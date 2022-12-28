import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {
  const { items, handleReduce } = props;
  console.log(items);
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <p>Linkアイテムの数は{items.length}個です。</p>
        <button onClick={handleReduce}>減らす</button>
        {items.map((item) => {
          return (
            <a key={item.href} href={item.href} className={classes.card}>
              <h2 className={classes.title}>{item.title}</h2>
              <p className={classes.description}>{item.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};
