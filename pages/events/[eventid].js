import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";

const Event = (props) => {
  const router = useRouter();
  const eventData = getEventById(router.query.eventid);

  if (!eventData) {
    return <p>No such event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt="alt text"
      />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default Event;
