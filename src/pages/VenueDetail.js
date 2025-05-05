import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import BookingForm from "../components/BookingForm";

const VenueDetail = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await api.get(`/holidaze/venues/${id}`);
        setVenue(response.data.data); // ✅ viktig!
      } catch (err) {
        setError("Failed to load venue");
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  if (loading) return <div className="container mt-5">Loading venue details...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;
  if (!venue) return null;

  const {
    name,
    description,
    media,
    location,
    price,
    maxGuests,
    rating,
    meta,
  } = venue;

  const validMedia = Array.isArray(media) ? media.filter((img) => img.url) : [];

  return (
    <div className="container mt-5">
      <h2>{name}</h2>

      {/* 🖼 Bildevisning */}
      {validMedia.length > 1 ? (
        <div id="venueCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            {validMedia.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <img
                  src={item.url}
                  className="d-block w-100 rounded"
                  alt={item.alt || name}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#venueCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#venueCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : validMedia.length === 1 ? (
        <div className="mb-4">
          <img
            src={validMedia[0].url}
            alt={validMedia[0].alt || name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
      ) : (
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/800x400?text=No+Image"
            alt="No image available"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
      )}

      <p>{description}</p>

      <ul className="list-group list-group-flush mb-4">
        {location?.city && (
          <li className="list-group-item"><strong>City:</strong> {location.city}</li>
        )}
        <li className="list-group-item"><strong>Price:</strong> ${price} / night</li>
        <li className="list-group-item"><strong>Max Guests:</strong> {maxGuests}</li>
        {rating && <li className="list-group-item"><strong>Rating:</strong> {rating}</li>}
        {meta?.wifi && <li className="list-group-item">✔️ Wi-Fi available</li>}
        {meta?.parking && <li className="list-group-item">✔️ Parking available</li>}
        {meta?.breakfast && <li className="list-group-item">✔️ Breakfast included</li>}
        {meta?.pets && <li className="list-group-item">✔️ Pets allowed</li>}
      </ul>

      <BookingForm venueId={venue.id} />
    </div>
  );
};

export default VenueDetail;
