import { useEffect, useState } from 'react';
import { fetchSchedules } from '../services/api';
import Schedules from '../components/SchedulesTable';

export default function ManageSchedules() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetchSchedules()
      .then((response) => setTrucks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Manage Schedules</h1>
      <Schedules trucks={trucks} />
    </div>
  );
}
