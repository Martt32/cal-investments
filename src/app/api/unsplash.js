import axios from 'axios';

const Application_ID = '718135'
const UNSPLASH_ACCESS_KEY = 'sT3DUBfK-WzMPkyEWCrbzFINbldJ15MyV2nuDvcLh-g'
const Secret_Key = 'TTxSaBvVRQ0EbIjMjzwB4rLYDpL7CagmO338g1CkKpY'


const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});

export const searchPhotos = async (query, page) => {
  try {
    const response = await unsplashApi.get('/search/photos', {
      params: { query, per_page: 16, page:page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};
