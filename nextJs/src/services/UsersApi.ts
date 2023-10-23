import axios from 'axios';
import { User } from '../Models/User';

//Usually I would have a cleaner setup for handling the axios on it ownfile
// and a File for each of the services
const api = axios.create({
  baseURL: 'http://localhost:5000'
});

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  }
};

const BASEURL = '/api/users'

export const fetchUsers = async () => {
  try {
    const response = await api.get(`${BASEURL}`);
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};

export const fetchUser = async (id: string) => {
  try {
    const response = await api.get(`${BASEURL}/${id}`);
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};

export const addUser = async (user: User) => {
  try {
    const response = await api.post(BASEURL, user, config);
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};

export const updateUser = async (user: User) => {
  try {
    const response = await api.put(`${BASEURL}/${user.id}`, user, config);
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await api.delete(`${BASEURL}/${id}`, config);
    return response.data;
  } catch (error) {
    // Handle errors as needed
    throw error;
  }
};