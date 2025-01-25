"use client";

import { useEffect, useState } from "react";
import { fetchTrucks } from "@/services/api"; // Correct for services
import TruckTable from "@/components/TruckTable"; // Correct for components

export default function Trucks() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetchTrucks()
      .then((response) => setTrucks(response.data))
      .catch((error) => console.error("Error fetching trucks:", error));
  }, []);

  return (
    <div>
      <h1>Manage Trucks</h1>
      <TruckTable trucks={trucks} />
    </div>
  );
}
