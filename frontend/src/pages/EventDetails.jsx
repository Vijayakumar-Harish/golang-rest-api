import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    api.get(`/events/${id}`).then((res) => setEvent(res.data));
  }, [id]);

  const registerEvent = async () => {
    await api.post(`/events/${id}/register`);
    alert("Registered successfully!");
  };

  const cancelRegistration = async () => {
    await api.delete(`/events/${id}/register`);
    alert("Registration cancelled!");
  };

  if (!event) {
    return <p className="p-6">Loading...</p>
  };

  return (
    <div className="max-w-lg mx-auto mt-8 border p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{event.Name}</h2>
      <p>{event.Description}</p>
      <p>📍 {event.Location}</p>
      <p>🕒 {new Date(event.DateTime).toLocaleString()}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={registerEvent}
          className="bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>
        <button
          onClick={cancelRegistration}
          className="bg-red-500 text-white p-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
