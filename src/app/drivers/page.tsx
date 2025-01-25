"use client";

import { useEffect, useState } from "react";
import { fetchDrivers } from "@/services/api";
import DriverForm from "@/components/DriverForm";

type Driver = {
    id: number;
    name: string;
    status: string;
};

export default function Drivers() {
    const [drivers, setDrivers] = useState<Driver[]>([]);

    useEffect(() => {
        fetchDrivers()
            .then((data: Driver[]) => setDrivers(data))
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

