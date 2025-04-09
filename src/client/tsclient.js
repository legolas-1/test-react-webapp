import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://aad.targetingservice.services.microsoft.com/api/FunctionalGroups/StaticAudiences/Audiences/joschweidebug', // Replace with your API base URL
});

export const getDataTS = async (endpoint, headers = {}) => {
  try {
    const response = await apiClient.get(endpoint, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postDataTS = async (endpoint, data, headers = {}) => {
  try {
    const updatedHeaders = {
      ...headers,
      'Content-Type': 'application/json'
    };
    
    const response = await apiClient.post(endpoint, data, { headers: updatedHeaders });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

