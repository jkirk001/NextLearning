import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <button className={classes.btn}>{props.children}</button>
      </Link>
    );
  }
  return (
    <button onClick={props.click} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
