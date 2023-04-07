import { useState } from "react";

const Events = ({ events }) => {
  const [event, setEvent] = useState(events);
  const fetchSportsData = async (eventName) => {
    const response = await fetch(
      `http://localhost:4000/events?catagory=${eventName}`
    );
    const data = await response.json();
    setEvent(data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <div>
        <button onClick={() => fetchSportsData("sports")}>Sports</button>
        <button onClick={() => fetchSportsData("technology")}>
          Technology
        </button>
        <button onClick={() => fetchSportsData("food")}>Food</button>
      </div>
      <h1>List of Events</h1>
      {event.map((event) => {
        return (
          <div key={event.id} style={{ textAlign: "center" }}>
            <h4>
              {event.title}-{event.date} 👉 {event.catagory}
            </h4>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Events;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/events");
  const data = await response.json();
  return {
    props: {
      events: data,
    },
  };
};
