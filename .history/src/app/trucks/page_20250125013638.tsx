import { useState, useEffect } from "react";
import { fetchTrucks } from "@/services/api";
import TruckTable from "@/components/TruckTable";

type Truck = {
  id: number;
  truck_number: string;
  status: string;
};

export default function Trucks() {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  useEffect(() => {
    fetchTrucks()
      .then((response: { data: Truck[] }) => setTrucks(response.data))
      .catch((error: unknown) => {
        console.error("Error fetching trucks:", error);
      });
  }, []);

  return (
    <div>
      <h1>Manage Trucks</h1>
      <TruckTable trucks={trucks} />
    </div>
  );
}
