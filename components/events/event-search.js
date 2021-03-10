import { useRef } from "react";
import classes from "./event-search.module.css";
import Button from "../ui/button/button";

const EventSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectefMonth = monthRef.current.value;
    props.onSearch(selectedYear, selectefMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Year</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">Novermber</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
};

export default EventSearch;
