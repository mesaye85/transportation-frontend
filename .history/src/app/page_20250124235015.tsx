import Link from "next/link";
import "./page.css";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Transportation Management System</h1>
      <p>Navigate to the following sections:</p>
      <ul>
        <li><a href="/trucks">Manage Trucks</a></li>
        <li><a href="/drivers">Manage Drivers</a></li>
        <li><a href="/schedules">Manage Schedules</a></li>
      </ul>
    </div>
  );
}

