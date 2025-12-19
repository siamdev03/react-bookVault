import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/books",
});

export const fetchBooks = () => API.get("/");
export const createBook = (data) => API.post("/", data);
export const updateBook = (id, data) => API.put(`/${id}`, data);
export const deleteBook = (id) => API.delete(`/${id}`);
export const fetchStats = () =>
  axios.get("http://localhost:3000/api/stats");
