"use client";

import { useEffect, useState } from "react";
import { fetchSchedules } from "../../services/api";
import ScheduleCard from "../../components/ScheduleCard";

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedules()
      .then((response) => setSchedules(response.data))
      .catch((error) => console.error("Error fetching schedules:", error));
  }, []);

  return (
    <div>
      <h1>Manage Schedules</h1>
      <div>
        {schedules.map((schedule) => (
          <ScheduleCard key={schedule.id} schedule={schedule} />
        ))}
      </div>
    </div>
  );
}
