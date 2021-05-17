import axios from 'axios';
import { BASE_URL } from '../constant/index';

type formType = {
  [key: string]: string
}

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept-Language': 'en',
  },
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => {
    Promise.reject(error);
  },
);

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  // error converter
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status >= 400 && status <= 499) {
        return Promise.reject({
          messageContent: 'API resource not found'
        });
      } else if (status >= 500 && status <= 599) {
        return Promise.reject({
          messageContent: 'API internal server Error',
        });
      }
    } else if (error.message === 'Network Error') {
      return Promise.reject({
        messageContent: 'Network Error',
      });
    } else {
      return Promise.reject(error);
    }
  },
);

// API fetch Employee List 
export const fetchListApi = (page: number) =>
  apiClient.get(`${BASE_URL}/?page=${page}&limit=5`);

// API get Detail of An Employee 
export const getDetailApi = (id: string) =>
  apiClient.get(`${BASE_URL}/${id}`);

// API Create A new Employee 
export const createItemApi = (data: formType) =>
  apiClient.post(BASE_URL, data);

// API Update An Employee 
export const editItemApi = (data: formType) =>
  apiClient.put(`${BASE_URL}/${data.id}`, data);

// API Deleted An Employee 
export const deleteItemApi = (id: string) =>
  apiClient.delete(`${BASE_URL}/${id}`);
