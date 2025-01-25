import { useEffect, useState } from 'react';
import { fetchSchedules, fetchTrucks } from '../services/api';
import Schedules from '../components/SchedulesTable';

export default function Schedules() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetchSchedules()
      .then((response) => setTrucks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Manage Schedules</h1>
      <TruckTable trucks={trucks} />
    </div>
  );
}
