export default function ScheduleCard({ schedule }) {
    return (
        <div>
            <h3>{schedule.name}</h3>
            <p>Days On: {schedule.days_on}</p>
            <p>Days Off: {schedule.days_off}</p>
        </div>
    );
}