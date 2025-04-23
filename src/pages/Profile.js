import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.venueManager) {
          const venueRes = await api.get(`/holidaze/profiles/${user.name}/venues`);
          setVenues(venueRes.data);
        } else {
          const bookingRes = await api.get(`/holidaze/profiles/${user.name}/bookings`);
          setBookings(bookingRes.data);
        }
      } catch (err) {
        setError("Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) return <div className="container mt-5">Loading profile...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Welcome, {user.name}</h2>
      <img
        src={user.avatar || "https://via.placeholder.com/150"}
        alt={user.name}
        className="img-thumbnail mb-3"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.venueManager ? "Venue Manager" : "Customer"}</p>

      {user.venueManager ? (
        <>
          <h4 className="mt-4">Your Venues</h4>
          {venues.length === 0 ? (
            <p>You have not created any venues yet.</p>
          ) : (
            <ul className="list-group">
              {venues.map((venue) => (
                <li className="list-group-item" key={venue.id}>
                  <Link to={`/venue/${venue.id}`}>{venue.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <>
          <h4 className="mt-4">Your Upcoming Bookings</h4>
          {bookings.length === 0 ? (
            <p>You have no upcoming bookings.</p>
          ) : (
            <ul className="list-group">
              {bookings.map((booking) => (
                <li className="list-group-item" key={booking.id}>
                  <strong>Venue:</strong> {booking.venue.name} <br />
                  <strong>Date:</strong> {new Date(booking.dateFrom).toLocaleDateString()} → {new Date(booking.dateTo).toLocaleDateString()}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
