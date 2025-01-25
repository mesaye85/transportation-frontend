import Link from "next/link";

export default function Home() {
  import "./page.css";
    <main className="main-container">
    return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to the Transportation Management System</h1>
      <p>Select a feature to manage your logistics:</p>
      <nav>
        <ul>
          <li>
            <Link href="/drivers">Manage Drivers</Link>
          </li>
          <li>
            <Link href="/trucks">Manage Trucks</Link>
          </li>
          <li>
            <Link href="/schedules">Manage Schedules</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
