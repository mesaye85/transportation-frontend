import axios from "axios";

// Base URL for your Django backend
const API_BASE_URL = "http://127.0.0.1:8000/api";

// Create a centralized axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Set a timeout to prevent hanging requests
});

// Helper function to handle errors
const handleApiError = (error: any) => {
  console.error("API Error Details:", {
    message: error.message,
    response: error.response?.data,
    status: error.response?.status,
    headers: error.response?.headers,
    request: {
      method: error.config?.method,
      url: error.config?.url,
    },
    stack: error.stack, // Include the stack trace for debugging
  });
  throw error.response?.data || new Error("An unexpected error occurred.");
};

// Generic fetch function
const fetchData = async (endpoint: string, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Generic create function
const createData = async (endpoint: string, data: any) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Generic update function
const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Generic delete function
const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Specific API calls
export const fetchSchedules = (params) => fetchData("/schedules/", params);
export const fetchDrivers = (params) => fetchData("/drivers/", params);
export const fetchTrucks = (params) => fetchData("/trucks/", params);

export const createTruck = (truckData) => createData("/trucks/", truckData);
export const createDriver = (driverData) => createData("/drivers/", driverData);
export const assignSchedule = (scheduleData) => createData("/schedules/", scheduleData);

export const updateTruck = (truckId, truckData) =>
  updateData(`/trucks/${truckId}/`, truckData);

export const deleteTruck = (truckId) => deleteData(`/trucks/${truckId}/`);
