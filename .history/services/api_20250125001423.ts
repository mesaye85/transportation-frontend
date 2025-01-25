import axios, { AxiosError, AxiosResponse } from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

type ErrorHandler = (error: AxiosError) => void;

// Helper function to handle errors
const handleApiError: ErrorHandler = (error) => {
  console.error("API Error Details:", {
    message: error.message,
    response: error.response?.data,
    status: error.response?.status,
    headers: error.response?.headers,
    request: {
      method: error.config?.method,
      url: error.config?.url,
    },
    stack: error.stack, // Include stack trace
  });
  throw error.response?.data || new Error("An unexpected error occurred.");
};

export const fetchSchedules = async (): Promise<any[]> => {
  try {
    const response: AxiosResponse<any[]> = await api.get("/schedules/");
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};

export const fetchDrivers = async (): Promise<any[]> => {
  try {
    const response: AxiosResponse<any[]> = await api.get("/drivers/");
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};

export const fetchTrucks = async (): Promise<any[]> => {
  try {
    const response: AxiosResponse<any[]> = await api.get("/trucks/");
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};

export const createTruck = async (truckData: Record<string, any>): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post("/trucks/", truckData);
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};

export const createDriver = async (driverData: Record<string, any>): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post("/drivers/", driverData);
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};

export const assignSchedule = async (scheduleData: Record<string, any>): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post("/schedules/", scheduleData);
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};
