import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

const AllEvents = (props) => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEvents;
