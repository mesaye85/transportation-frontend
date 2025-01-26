import PropTypes from 'prop-types';

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
        </ul>
      </div>
    )
  }
  
  DriverForm.propTypes = {
    drivers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        truck_number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
    )
  }
  