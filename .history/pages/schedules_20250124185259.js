import { useEffect, useState } from 'react';
import { fetchTrucks } from '../services/api';
import TruckTable from '../components/TruckTable';

export default function Schedules() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetchTrucks()
      .then((response) => setTrucks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Manage Trucks</h1>
      <TruckTable trucks={trucks} />
    </div>
  );
}
