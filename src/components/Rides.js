import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Rides.css";

const ridesData = [
  {
    id: 1,
    title: "Kerala via Rameshwaram",
    date: "March 4, 2025",
    time: "11:00 PM",
    location: "Marathahalli, Bangalore",
    image: "/assets/kerala-ride.jpg",
  }
];

const Rides = () => {
  const navigate = useNavigate();

  return (
    <section id="rides" className="rides-container">
      <h2>Upcoming Rides</h2>
      {ridesData.length === 0 ? (
        <p className="no-rides">Stay tuned for upcoming rides!</p>
      ) : (
        <div className="rides-grid">
          {ridesData.map((ride) => (
            <div key={ride.id} className="ride-card">
              <img src={ride.image} alt={ride.title} className="ride-image" />
              <div className="ride-details">
                <h3>{ride.title}</h3>
                <p><strong>Date:</strong> {ride.date}</p>
                <p><strong>Time:</strong> {ride.time}</p>
                <p><strong>Location:</strong> {ride.location}</p>
                <button
                  className="join-btn"
                  onClick={() => navigate(`/join-ride/${ride.id}`)}
                >
                  Join Ride
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Rides;
