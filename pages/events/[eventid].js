import { useRouter } from "next/router";

const Event = (props) => {
  const router = useRouter();
  return (
    <div>
      <h1>Event "{router.query.eventid}"</h1>
    </div>
  );
};

export default Event;
