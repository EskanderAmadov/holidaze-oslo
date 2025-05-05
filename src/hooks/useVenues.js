import { useEffect, useState } from "react";
import { getVenues } from "../services/venues";

const useVenues = () => {
  const [venues, setVenues] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const data = await getVenues();
        setVenues(data);
        setFiltered(data);
      } catch (err) {
        setError("Failed to fetch venues");
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  const filterVenues = (search) => {
    const query = search.toLowerCase();
    const results = venues.filter((venue) =>
      venue.name.toLowerCase().includes(query)
    );
    setFiltered(results);
  };

  return { venues: filtered, loading, error, filterVenues };
};

export default useVenues;
