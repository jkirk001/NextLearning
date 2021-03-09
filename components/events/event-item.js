import Link from "next/link";

const EventItem = (props) => {
  const {
    id,
    title,
    description,
    location,
    date,
    image,
    isFeatured,
  } = props.children;

  const humanDate = new Date(date).toLocaleDateString("en-US");

  return (
    <li name="LOL2">
      <img src={"/" + image} alt={title} width="400px" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanDate}</time>
          </div>
          <div>
            <address>{location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>LOl</Link>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
