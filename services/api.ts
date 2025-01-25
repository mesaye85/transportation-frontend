import axios, { AxiosError, AxiosResponse } from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define types
type Truck = {
  id: number;
  truck_number: string;
  status: string;
};

type Driver = {
  id: number;
  name: string;
  status: string;
};

type Schedule = {
  id: number;
  details: string;
};

// Error handling utility
const handleApiError = (error: AxiosError): void => {
  console.error("API Error:", {
    message: error.message,
    response: error.response?.data || "No response received",
    status: error.response?.status || "No status available",
  });
  throw error.response?.data || new Error("An unexpected error occurred.");
};

// Fetch functions
export const fetchTrucks = async (): Promise<Truck[]> => {
  try {
    const response: AxiosResponse<Truck[]> = await api.get("/trucks/");
    // Ensure the frontend receives camelCase keys if required
    return response.data.map((truck) => ({
      id: truck.id,
      truck_number: truck.truck_number,
      status: truck.status,
    }));
  } catch (error) {
    handleApiError(error as AxiosError);
    return [];
  }
};

export const fetchDrivers = async (): Promise<Driver[]> => {
  try {
    const response: AxiosResponse<Driver[]> = await api.get("/drivers/");
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
    return [];
  }
};

export const fetchSchedules = async (): Promise<Schedule[]> => {
  try {
    const response: AxiosResponse<Schedule[]> = await api.get("/schedules/");
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
    return [];
  }
};
