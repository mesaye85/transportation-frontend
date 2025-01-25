export default function DriverForm({ drivers }) {
    return (
      <div>
        <h2>Driver List</h2>
        <ul>
          {drivers.map((driver) => (
            <li key={driver.id}>
              {driver.name} - Assigned Truck: {driver.truck_number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  