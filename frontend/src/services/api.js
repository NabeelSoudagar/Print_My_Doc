import axios from "axios";
import { createClient } from "@supabase/supabase-js";

// Supabase config
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// Backend API
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

// ---------------- USERS ----------------
export const createUser = (userData) => API.post("/users", userData);
export const getUsers = () => API.get("/users");
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const loginUser = (credentials) => API.post("/users/login", credentials);

// ---------------- ORDERS ----------------

// Upload file → Supabase Storage
export const uploadToSupabase = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from("documents")
    .upload(fileName, file);

  if (error) throw error;

  // Get public URL
  const { data: publicUrlData } = supabase.storage
    .from("documents")
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
};

// Place new order (save file URL + order data in DB via backend)
export const placeOrder = async (orderData) => {
  const token = localStorage.getItem("token");
  return API.post("/orders", orderData, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

// Get all orders
export const getOrders = () => {
  const token = localStorage.getItem("token");
  return API.get("/orders", {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

// Delete order
export const deleteOrder = (id) => {
  const token = localStorage.getItem("token");
  return API.delete(`/orders/${id}`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};
