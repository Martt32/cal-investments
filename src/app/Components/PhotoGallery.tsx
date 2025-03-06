'use client'
import React, { useState } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

// Define Unsplash Photo Types
interface UnsplashPhoto {
  id: string;
  urls: { small: string };
  alt_description: string;
  likes: number;
  user: {
    username: string;
    profile_image: { small: string };
  };
}

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

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  likes:number;
  user:{
    username:string;
    profile_image:{
      small:string;
    };
  };
  alt_description: string;
}


// Type for unsplash response
interface UnsplashApiResponse {
  results: UnsplashPhoto[];
  total_pages: number;
}

const PhotoGallery: React.FC = () => {
  const [query, setQuery] = useState<string>("manchester");
  const [keyword, setKeyword] = useState<string>("");

  // using query in place of axios or fetch()
  const { data, refetch } = useQuery<UnsplashPhoto[]>({
    queryKey: ["photos", query],
    queryFn: async () =>  fetchPhotos(query, 1),
    enabled: !! query, 
  });

  const {
    data: morePhotos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<UnsplashApiResponse>({
    queryKey: ["photos", query, "infinite"],
    queryFn:  ({ pageParam = 1 }) => fetchPhotos(query, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
    enabled: false,
  });

  // Handles the search function 
  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setKeyword(query);
    await refetch();
  };

  // Format date
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      year: "numeric",
    });

  const today = new Date();

  return (
    <>
    <div>
      <form className="h-[100vh]" onSubmit={handleSearch}>
        <div className="md:p-[10rem] flex flex-col justify-center items-center bg-gray-100 h-[50vh]">
          <div className="flex flex-col md:flex-row justify-between items-center w-full p-10">
            <h1 className="font-pacifico font-bold text-2xl md:text-gray-200">
              PhotoSearch
            </h1>
            <h1 className="md:text-gray-200">{formatDate(today)}</h1>
          </div>
          <div className="flex p-6 w-full space-x-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for photos..."
              className="p-2 w-full rounded-lg focus:border-blue-500 focus:border-2 border-gray-200 border-[1px]"
            />
            <button
              className="bg-blue-600 px-2 py-0 text-white rounded-lg font-semibold"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="md:px-[10rem] py-6 flex flex-col justify-center md:bg-black">
        <div className="p-4 -mt-[59vh]">
          <p className="text-2xl mb-10 md:text-gray-200">
            Showing results for{" "}
            <span className="underline decoration-dotted font-[700] capitalize">
              {query}
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.map((photo: Photo) => (
              <div
                key={photo.id}
                className="relative border-gray-200 border-[1px] w-full bg-gray-100 rounded-lg"
              >
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="w-full h-[208px] rounded-t-lg"
                />
                <p className="shadow-md md:text-gray-200 text-[12px] absolute bg-gray-100 rounded-full px-2 py-1 top-4 right-2">
                  ❤️ {photo.likes}
                </p>
                <div className="flex justify-between items-center p-5">
                  <img
                    src={photo.user.profile_image.small}
                    alt={photo.alt_description}
                    className="w-[28px] h-[28px] rounded-full border-black border-2"
                  />
                  <p className="md:text-gray-200">{photo.user.username}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center space-y-10 items-center">
            {hasNextPage && (
              <button
                onClick={() => fetchNextPage()}
                className="bg-white px-2 py-1 border-gray-200 border-[1px] rounded-[5px] font-semibold m-4 mb-10"
              >
                {isFetchingNextPage ? "Loading..." : "Load More"}
              </button>
            )}
            <p className="text-gray-800 text-sm">
              © 2025 <span className="font-bold font-pacifico">PhotoSearch.</span> ❤️
              Martins Charles
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PhotoGallery;
