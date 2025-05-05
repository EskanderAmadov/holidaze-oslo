import api from "./api";

// Get all venues (optionally with _bookings and _owner)
export const getVenues = async () => {
  const res = await api.get("/holidaze/venues");
  return res.data.data; // Based on API's structure
};

// Get single venue by ID
export const getVenueById = async (id) => {
  const res = await api.get(`/holidaze/venues/${id}`);
  return res.data;
};

// Create a new venue (for venue managers)
export const createVenue = async (venueData) => {
  const res = await api.post("/holidaze/venues", venueData);
  return res.data;
};

// Update an existing venue
export const updateVenue = async (id, venueData) => {
  const res = await api.put(`/holidaze/venues/${id}`, venueData);
  return res.data;
};

// Delete a venue
export const deleteVenue = async (id) => {
  const res = await api.delete(`/holidaze/venues/${id}`);
  return res.data;
};
