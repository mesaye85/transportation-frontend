'use client'

import { useEffect, useState } from "react";
import { fetchSchedules } from "@/services/api"; // Correct path
import ScheduleCard from "@/components/ScheduleCard"; // Correct path

type Schedule = {
    id: number;
    details: string;
};

export default function SchedulesPage() {
    const [schedules, setSchedules] = useState<Schedule[]>([]);

    useEffect(() => {
        fetchSchedules()
            .then((data: Schedule[]) => setSchedules(data)) // Explicitly type data
            .catch((err: unknown) => console.error("Error fetching schedules:", err)); // Explicitly type err
    }, []); // Dependency array to run once when the component mounts

    return (
        <div>
            <h1>Schedules</h1>
            <ul>
                {schedules.map((schedule) => (
                    <li key={schedule.id}>{schedule.details}</li>
                ))}
            </ul>
        </div>
    );
}
