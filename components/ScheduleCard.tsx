interface Schedule {
  title: string;
  description: string;
}

export default function ScheduleCard({ schedule }: { schedule: Schedule }) {
    return (
      <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem" }}>
        <h3>{schedule.title}</h3>
        <p>{schedule.description}</p>
      </div>
    );
  }
  