import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";

const EventSlug = (props) => {
  const router = useRouter();
  const yearMonth = router.query.slug;
  if (yearMonth) {
    const queryDate = {
      year: parseInt(yearMonth[0]),
      month: parseInt(yearMonth[1]),
    };
    const results = getFilteredEvents(queryDate);

    return (
      <div>
        <ResultsTitle date={[queryDate.year, queryDate.month]} />
        {results && results.length > 0 ? (
          <EventList items={results} />
        ) : (
          <h1>Nothin found</h1>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1 className="center">...Loading</h1>
    </div>
  );
};

export default EventSlug;
