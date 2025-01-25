import { useEffect, useState } from "react";
import { fetchSchedules } from "@/services/api";

type Schedule = {
  id: number;
  details: string;
};

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    fetchSchedules()
      .then((data) => setSchedules(data))
      .catch((err) => console.error("Error fetching schedules:", err));
  }, []);

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