import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = (props) => {
  const featured = getFeaturedEvents();
  return (
    <div>
      <h1>HomePage</h1>
      <EventList items={featured} />
    </div>
  );
};

export default HomePage;
