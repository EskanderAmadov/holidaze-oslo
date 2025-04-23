import React from "react";

const VenueCard = ({ venue }) => {
  const {
    name,
    location,
    media,
    price,
  } = venue;

  const imageUrl = media && media.length > 0
    ? media[0]
    : "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {location?.city && (
          <p className="card-text">
            <strong>City:</strong> {location.city}
          </p>
        )}
        {price && (
          <p className="card-text">
            <strong>Price:</strong> ${price} / night
          </p>
        )}
      </div>
    </div>
  );
};

export default VenueCard;
