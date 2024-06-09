import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'tE9h_sLoKNxlgSvGRrAdSmv_mm508biQD2cvngspfqk';
export const fetchPhotosByQuery = async (searchQuery, currentPage) => {
  const response = await axios.get(`search/photos`, {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 12,
      client_id: ACCESS_KEY,
      orientation: 'landscape',
    },
  });
  return response.data;
};