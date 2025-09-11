import axios from "axios";
import { createClient } from "@supabase/supabase-js";

// Supabase client for file storage
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// API base URL (backend)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

// ---------------- USERS ----------------
export const createUser = (userData) => API.post("/users", userData);
export const getUsers = () => API.get("/users");
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const loginUser = (credentials) => API.post("/users/login", credentials);

// ---------------- ORDERS ----------------
export const placeOrder = (formData) => {
  const token = localStorage.getItem("token");
  return API.post("/orders/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

export const printDocument = (orderId) => {
  const token = localStorage.getItem("token");
  return API.post(`/orders/print/${orderId}`, {}, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

export const getOrders = () => {
  const token = localStorage.getItem("token");
  return API.get("/orders", {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

export const deleteOrder = (id) => {
  const token = localStorage.getItem("token");
  return API.delete(`/orders/${id}`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};
