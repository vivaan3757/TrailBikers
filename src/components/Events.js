import React, { useEffect, useState } from "react";
import "../styles/Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error loading events:", error));
  }, []);

  return (
    <section id="events">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="no-events">Stay tuned for upcoming biking events!</p>
      ) : (
        <div className="events-container">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;
