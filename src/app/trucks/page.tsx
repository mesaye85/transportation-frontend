"use client"

import { useState, useEffect } from "react";
import { fetchTrucks } from "@/services/api";
import TruckTable from "@/components/TruckTable";

interface Truck {
    id: string;
    truckNumber: string;
    status: string;
}

export default function Trucks() {
    const [trucks, setTrucks] = useState<Truck[]>([]);

    useEffect(() => {
        fetchTrucks()
            .then((response: Truck[]) => setTrucks(response)) // Adjust response type
            .catch((error: unknown) => console.error("Error fetching trucks:", error));
    }, []); // Dependency array to ensure it runs only once when the component mounts

    return (
        <div>
            <h1>Manage Trucks</h1>
            <TruckTable trucks={trucks} />
        </div>
    );
}
