"use client";

import { fetchDrivers } from "@/services/api"; // Correct for services
import DriverForm from "@/components/DriverForm"; // Correct for components

type Driver = {
  id: number;
  name: string;
  status: string;
};

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetchDrivers()
      .then((data) => setDrivers(data))
      .catch((error) => {
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
