import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import api from "../services/api";
import VenueBookings from "../components/VenueBookings";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await api.get(`/holidaze/profiles/${user.name}/venues`);
        setVenues(response.data);
      } catch (err) {
        setError("Failed to fetch your venues.");
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, [user.name]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this venue?");
    if (!confirmed) return;

    try {
      await api.delete(`/holidaze/venues/${id}`);
      setVenues((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      alert("Failed to delete venue.");
      console.error("Delete error:", err);
    }
  };

  if (loading) return <div className="container mt-5">Loading your venues...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Your Dashboard</h2>
      <p>Welcome, {user.name}! Manage your venues below.</p>

      <Link to="/venue/create" className="btn btn-primary mb-4">
        + Create New Venue
      </Link>

      {venues.length === 0 ? (
        <p>You haven’t created any venues yet.</p>
      ) : (
        <div className="accordion" id="venueAccordion">
          {venues.map((venue) => (
            <div className="card mb-3" key={venue.id}>
              <div className="card-body">
                <h5 className="card-title">{venue.name}</h5>
                <div className="d-flex gap-2 flex-wrap mb-2">
                  <Link to={`/venue/${venue.id}`} className="btn btn-outline-primary btn-sm">
                    View
                  </Link>
                  <Link to={`/venue/edit/${venue.id}`} className="btn btn-outline-secondary btn-sm">
                    Edit
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(venue.id)}
                  >
                    Delete
                  </button>
                </div>

                <VenueBookings venueId={venue.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
