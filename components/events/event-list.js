import EventItem from "./event-item";

const EventList = (props) => {
  const displayFeatured = props.items.map((item, index) => {
    return <EventItem key={index}>{item}</EventItem>;
  });
  return <ul>{displayFeatured}</ul>;
};
export default EventList;
