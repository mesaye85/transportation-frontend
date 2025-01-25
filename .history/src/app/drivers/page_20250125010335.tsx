type Driver = {
  id: number;
  name: string;
  status: string;
};

export default function Drivers() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetchDrivers()
      .then((response: { data: Driver[] }) => setDrivers(response.data))
      .catch((error: unknown) => {
        console.error("Error fetching drivers:", error);
      });
  }, []);

  return (
    <div>
      <h1>Manage Drivers</h1>
      <DriverForm drivers={drivers} />
    </div>
  );
}
import { useState, useEffect } from 'react';

function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  let state = initialValue;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [state, setState];
}

