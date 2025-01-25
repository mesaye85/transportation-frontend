import axios, { AxiosError, AxiosResponse } from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Error handling utility
const handleApiError = (error: AxiosError): void => {
  console.error("API Error:", {
    message: error.message,
    response: error.response?.data,
    status: error.response?.status,
  });
  throw error.response?.data || new Error("An unexpected error occurred.");
};

// Fetch data
export const fetchTrucks = async (): Promise<Truck[]> => {
  try {
    const response: AxiosResponse<Truck[]> = await api.get("/trucks/");
    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
    return [];
  }
};
