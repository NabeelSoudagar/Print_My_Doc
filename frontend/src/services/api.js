import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ---- Users ----
export const createUser = (userData) => API.post("/users", userData);
export const getUsers= () => API.get("/users");
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const loginUser = (credentials) => API.post("/users/login", credentials);

// ---- Orders / Upload ----
export const uploadDocument = (formData) => {
  const token = localStorage.getItem('token');
  return API.post("/orders/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

export const printDocument = (orderId) => {
  const token = localStorage.getItem('token');
  return API.post(`/orders/print/${orderId}`, {}, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};
