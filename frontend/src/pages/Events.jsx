import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Events</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.ID}
            className="border p-4 rounded shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">{event.Name}</h3>
            <p>{event.Description}</p>
            <p className="text-gray-600">📍 {event.Location}</p>
            <Link
              to={`/events/${event.ID}`}
              className="text-blue-600 hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
