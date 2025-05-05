import React from "react";

const VenueCard = ({ venue }) => {
  const {
    name,
    location,
    media,
    price,
  } = venue;

  const hasImage = Array.isArray(media) && media.length > 0 && media[0].url;
  const imageUrl = hasImage
    ? media[0].url
    : "https://via.placeholder.com/400x300?text=No+Image";
  const imageAlt = hasImage
    ? media[0].alt || name
    : "No image available";

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="card-img-top"
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
