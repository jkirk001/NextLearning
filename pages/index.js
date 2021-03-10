import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = (props) => {
  const featured = getFeaturedEvents();
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>HomePage</h1>
      <EventList items={featured} />
    </div>
  );
};

export default HomePage;
