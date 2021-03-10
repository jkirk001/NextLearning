import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const displayFeatured = props.items.map((item, index) => {
    return <EventItem key={index}>{item}</EventItem>;
  });
  return <ul className={classes.List}>{displayFeatured}</ul>;
};
export default EventList;
