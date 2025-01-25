import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTrucks = () => api.get('/trucks/');
export const fetchDrivers = () => api.get('/drivers/');
export const fetchSchedules = () => api.get('/schedules/');
export const createTruck = (truckData) => api.post('/trucks/', truckData);
export const createDriver = (driverData) => api.post('/drivers/', driverData);
export const assignSchedule = (driverId, scheduleId) =>
  api.post(`/drivers/${driverId}/assign_schedule/`, { schedule_id: scheduleId });

// File: /components/TruckTable.js
export default function TruckTable({ trucks }) {
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
}