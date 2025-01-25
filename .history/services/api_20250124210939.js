import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Helper function to handle errors
const handleApiError = (error) => {
  console.error("API Error:", error.response || error.message || error);
  throw error.response?.data || new Error("An error occurred while making the request.");
};

export const fetchSchedules = async () => {
  try {
    const response = await api.get("/schedules/");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const fetchDrivers = async () => {
  try {
    const response = await api.get("/drivers/");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const fetchTrucks = async () => {
  try {
    const response = await api.get("/trucks/");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createTruck = async (truckData) => {
  try {
    const response = await api.post("/trucks/", truckData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createDriver = async (driverData) => {
  try {
    const response = await api.post("/drivers/", driverData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const assignSchedule = async (scheduleData) => {
  try {
    const response = await api.post("/schedules/", scheduleData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
