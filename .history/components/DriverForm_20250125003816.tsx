type Driver = {
  id: number;
  name: string;
  status: string;
};

type DriverFormProps = {
  drivers: Driver[];
};

export default function DriverForm({ drivers }: DriverFormProps) {
  return (
    <div>
      {drivers.map((driver) => (
        <p key={driver.id}>{driver.name}</p>
      ))}
    </div>
  );
}
