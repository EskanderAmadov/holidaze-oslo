import api from "./api";

// Create a new booking (for logged-in customers)
export const createBooking = async (bookingData) => {
  const res = await api.post("/holidaze/bookings", bookingData);
  return res.data;
};

// Get bookings for the logged-in user's profile
export const getUserBookings = async (username) => {
  const res = await api.get(`/holidaze/profiles/${username}/bookings`);
  return res.data;
};

// Get bookings for a specific venue
export const getVenueBookings = async (venueId) => {
  const res = await api.get(`/holidaze/venues/${venueId}?_bookings=true`);
  return res.data.bookings; // Note: nested in response
};
