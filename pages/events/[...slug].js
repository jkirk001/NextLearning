import { useRouter } from "next/router";

const EventSlug = (props) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Event</h1>
    </div>
  );
};

export default EventSlug;
