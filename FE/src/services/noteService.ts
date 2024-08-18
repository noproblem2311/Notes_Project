import axios from 'axios';

const API_URL = 'http://localhost:3001/notes';

export const getNotes = async () => {
  return axios.get(API_URL);
};

export const getNote = async (id: string) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createNote = async (note: { title: string; content: string }) => {
  return axios.post(API_URL, note);
};

export const updateNote = async (id: string, note: { title: string; content: string }) => {
  return axios.put(`${API_URL}/${id}`, note);
};

export const deleteNote = async (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};
