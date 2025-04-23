import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import BookingForm from "../components/BookingForm"; // 👈 Import bookingform

const VenueDetail = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await api.get(`/holidaze/venues/${id}`);
        setVenue(response.data);
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

  const imageUrl = media?.[0] || "https://via.placeholder.com/800x400?text=No+Image";

  return (
    <div className="container mt-5">
      <h2>{name}</h2>
      <img
        src={imageUrl}
        alt={name}
        className="img-fluid rounded mb-3"
        style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
      />

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

      {/* Booking form */}
      <BookingForm venueId={venue.id} />
    </div>
  );
};

export default VenueDetail;
