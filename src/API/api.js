import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/form';

export const getAllItems = () => axios.get(`${API_BASE_URL}`);
export const getItemById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const createItem = (data) => axios.post(`${API_BASE_URL}`, data);
export const updateItem = (id, data) => axios.put(`${API_BASE_URL}/${id}`, data);
export const deleteItem = (id) => axios.delete(`${API_BASE_URL}/${id}`);