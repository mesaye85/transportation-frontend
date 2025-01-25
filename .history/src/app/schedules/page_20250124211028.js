"use client";

import { useEffect, useState } from "react";
import { fetchSchedules } from "../../../services/api";
import ScheduleCard from "../../../components/ScheduleCard";

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSchedules()
      .then((data) => setSchedules(data))
      .catch((err) => {
        console.error("Error fetching schedules:", err);
        setError(err.message || "Failed to load schedules.");
      });
  }, []);

  return (
    <div>
      <h1>Manage Schedules</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div>
          {schedules.map((schedule) => (
            <ScheduleCard key={schedule.id} schedule={schedule} />
          ))}
        </div>
      )}
    </div>
  );
}
