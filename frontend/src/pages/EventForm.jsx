// src/components/EventForm.jsx
import { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    dateTime: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // saved after login

      const response = await axios.post(
        "http://localhost:8888/events",
        {
          name: form.name,
          description: form.description,
          location: form.location,
          dateTime: new Date(form.dateTime).toISOString(), // ✅ correct format
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Event created:", response.data);
      alert("Event created successfully!");
    } catch (err) {
      console.error("Error creating event:", err.response?.data || err.message);
      alert("Failed to create event.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md mt-10"
    >
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>

      <input
        type="text"
        name="name"
        placeholder="Event Name"
        className="w-full mb-3 p-2 border rounded-lg"
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full mb-3 p-2 border rounded-lg"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        className="w-full mb-3 p-2 border rounded-lg"
        onChange={handleChange}
        required
      />

      <input
        type="datetime-local"
        name="dateTime"
        className="w-full mb-3 p-2 border rounded-lg"
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
