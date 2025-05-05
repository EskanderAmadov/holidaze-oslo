import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import VenueCard from "../components/VenueCard";

const Home = () => {
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await api.get("/holidaze/venues");

        if (Array.isArray(response.data.data)) {
          setVenues(response.data.data);
          setFilteredVenues(response.data.data);
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

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = venues.filter((venue) =>
      venue.name.toLowerCase().includes(lowerSearch) ||
      venue.location?.city?.toLowerCase().includes(lowerSearch)
    );
    setFilteredVenues(filtered);
  }, [searchTerm, venues]);

  if (loading) return <div className="container mt-5">Loading venues...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Available Venues</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredVenues.length === 0 ? (
        <p>No venues match your search.</p>
      ) : (
        <div className="row">
          {filteredVenues.map((venue) => (
            <div className="col-md-4 mb-4" key={venue.id}>
              <Link to={`/venue/${venue.id}`} className="text-decoration-none text-dark">
                <VenueCard venue={venue} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
