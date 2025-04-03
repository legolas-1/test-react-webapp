import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://arpit-test-001.azurewebsites.net/', // Replace with your API base URL
});

export const getData = async (endpoint, headers = {}) => {
  try {
    const response = await apiClient.get(endpoint, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint, data, headers = {}) => {
  try {
    const response = await apiClient.post(endpoint, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

