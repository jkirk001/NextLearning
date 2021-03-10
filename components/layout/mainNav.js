import Link from "next/link";
import classes from "./mainNav.module.css";

const MainNav = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">SUMTIN</Link>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
