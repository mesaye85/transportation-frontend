import { useEffect, useState } from "react";
import { fetchDrivers } from "../../services/api";
import DriverForm from "../../components/DriverForm";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchDrivers()
      .then((response) => setDrivers(response.data))
      .catch((error) => console.error("Error fetching drivers:", error));
  }, []);

  return (
    <div>
      <h1>Manage Drivers</h1>
      <DriverForm drivers={drivers} />
    </div>
  );
}
