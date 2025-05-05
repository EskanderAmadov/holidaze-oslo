import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import VenueCard from "../components/VenueCard";

const Home = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await api.get("/holidaze/venues");

        // API returns { data: [...] }
        if (Array.isArray(response.data.data)) {
          setVenues(response.data.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        console.error("❌ Failed to fetch venues:", err);
        setError("Failed to load venues");
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  if (loading) return <div className="container mt-5">Loading venues...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Available Venues</h2>
      <div className="row">
        {venues.map((venue) => (
          <div className="col-md-4 mb-4" key={venue.id}>
            <Link to={`/venue/${venue.id}`} className="text-decoration-none text-dark">
              <VenueCard venue={venue} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
