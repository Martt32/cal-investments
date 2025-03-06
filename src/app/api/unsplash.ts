const UNSPLASH_ACCESS_KEY = "sT3DUBfK-WzMPkyEWCrbzFINbldJ15MyV2nuDvcLh-g";
const BASE_URL = "https://api.unsplash.com";

// Define types for the response data
interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: Photo[];
}

// Fetch function
export const fetchPhotos = async (query: string, page: number): Promise<Photo[]> => {
  const response = await fetch(
    `${BASE_URL}/search/photos?query=${query}&per_page=16&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching photos");
  }

  const data: UnsplashResponse = await response.json();
  console.log(data.results)
  return data.results;
};

// React Query Hook
// export const useSearchPhotos = (query: string, page: number) => {
//   return useQuery<Photo[]>({
//     queryKey: ["photos", query, page],
//     queryFn: () => fetchPhotos(query, page),
//     staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
//   });
// };
