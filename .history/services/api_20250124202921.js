import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTrucks = () => api.get("/trucks/");
export const fetchDrivers = () => api.get("/drivers/");
export const fetchSchedules = () => api.get("/schedules/");
export const createTruck = (truckData) => api.post("/trucks/", truckData);
export const createDriver = (driverData) => api.post("/drivers/", driverData);
export const assignSchedule = (scheduleData) =>
  api.post("/schedules/", scheduleData);
