type TruckTableProps = {
  trucks: Truck[];
};

const TruckTable: React.FC<TruckTableProps> = ({ trucks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Truck Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {trucks.map((truck) => (
          <tr key={truck.id}>
            <td>{truck.truck_number}</td>
            <td>{truck.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TruckTable;
