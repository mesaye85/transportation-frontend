export default function ScheduleCard({ schedule }) {
    return (
      <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem" }}>
        <h3>{schedule.title}</h3>
        <p>{schedule.description}</p>
      </div>
    );
  }
  