import api from "./api";

// Get profile by username
export const getProfile = async (username) => {
  const res = await api.get(`/holidaze/profiles/${username}`);
  return res.data;
};

// Update avatar image
export const updateAvatar = async (username, avatarUrl) => {
  const res = await api.put(`/holidaze/profiles/${username}/media`, {
    avatar: avatarUrl,
  });
  return res.data;
};

// Get venues for a venue manager
export const getManagerVenues = async (username) => {
  const res = await api.get(`/holidaze/profiles/${username}/venues`);
  return res.data;
};
