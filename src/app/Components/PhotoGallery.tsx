'use client'
import React, { useEffect, useState } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import Image from 'next/image'
import nores from '../Assets/no-results.svg'
import { useQueryClient } from "@tanstack/react-query";



// Define Unsplash Photo Types
interface UnsplashPhoto {
  id: string;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
  alt_description: string;
  likes: number;
  user: {
    username: string;
    profile_image: { small: string };
  };
}

const UNSPLASH_ACCESS_KEY = 'sT3DUBfK-WzMPkyEWCrbzFINbldJ15MyV2nuDvcLh-g'
const BASE_URL = "https://api.unsplash.com";



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
  if (data.results.length === 0) {

    return []; // Return an empty array instead of throwing an error
  }
  console.log(data)
  return data.results;
};


interface Photo {
  id: string;
  urls: {
    full: string;
    regular: string;
    small: string;
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




const PhotoGallery: React.FC = () => {
  const queryClient = useQueryClient();
  const [query, setQuery] = useState<string>("manchester");
  const [keyword, setKeyword] = useState<string>("manchester");
  const [page, setPage] = useState(1); // Track the current page
  // const [isFetchingNextPage, setIsFetchingNextPage] = useState(false); // Indicator for suspense
  // using query in place of axios or fetch()
  const { data, refetch, isFetching } = useQuery<UnsplashPhoto[]>({
    queryKey: ["photos", keyword],
    queryFn: async () =>  fetchPhotos(keyword, page),
    enabled: !! keyword, 
  });

  
  // useEffect to fetch data when `page` updates
  useEffect(() => {
    if (page > 1) {
      fetchPhotos(keyword, page).then((newPhotos) => {
        queryClient.setQueryData(["photos", keyword], (oldData) => [
          ...(oldData as UnsplashPhoto[] || []),
          ...newPhotos,
        ]);
      });
    }
  }, [page, keyword, queryClient]);
  
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // This will trigger the useEffect
  };
  

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
    <div className="flex flex-col justify-center items-center">
      <form className="h-[100vh] w-full" onSubmit={handleSearch}>
        <div className="md:p-[10rem] flex flex-col justify-center items-center bg-gray-100 h-[50vh]">
          <div className="flex flex-col md:flex-row justify-between items-center w-full p-10">
            <h1 className="font-pacifico font-bold text-2xl ">
              PhotoSearch
            </h1>
            <h1 className="">{formatDate(today)}</h1>
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

      {data?.length === 0 ? 
      <div className="flex flex-col ">
      <div className="-mt-[55vh] w-[80vw] flex flex-col bg-white rounded-lg border border-gray-200 justify-center items-center space-y-5 p-4">
        <Image src={nores} width={200} height={205} alt='No Results'/>
        <p className="text-xl mb-10 ">
            No results found for {' '}
            <span className="underline decoration-dotted font-[700] capitalize">
              {keyword}
            </span>
          </p>
      </div>
      <div className="flex flex-col mt-6 justify-center space-y-10 items-center">
              
            <p className="text-gray-800 text-sm">
              © 2025 <span className="font-bold font-pacifico">PhotoSearch.</span> ❤️
              Martins Charles
            </p>
          </div>
      </div> 
      : <div className="md:px-[10rem] py-6 flex flex-col justify-center md:bg-black">
        <div className="p-4 -mt-[59vh]">
          <p className="text-2xl mb-10 ">
            Showing results for {' '}
            <span className="underline decoration-dotted font-[700] capitalize">
              {keyword}
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.map((photo) => (
              <div
                key={photo.id}
                className="relative border-gray-200 border-[1px] w-full bg-gray-100 rounded-lg"
              >
                <Image
                  src={`${photo.urls.full}&w=324&h=208&q=90&fm=webp&fit=crop`}
                  alt={photo.alt_description}
                  width={800}
                  height={600}
                  quality={90}
                  className="w-full h-[208px] rounded-t-lg"
                />
                <p className="shadow-md  text-[12px] absolute bg-gray-100 rounded-full px-2 py-1 top-4 right-2">
                  ❤️ {photo.likes}
                </p>
                <div className="flex justify-between items-center p-5">
                  <img
                    src={photo.user.profile_image.small}
                    alt={photo.alt_description}
                    className="w-[28px] h-[28px] rounded-full border-black border-2"
                  />
                  <p className="">{photo.user.username}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center space-y-10 items-center">
              <button
                onClick={loadMore}
                className="bg-white px-2 py-1 border-gray-200 border-[1px] rounded-[5px] font-semibold m-4 mb-10"
              >
                {isFetching ? "Loading..." : "Load More"}
              </button>
            <p className="text-gray-800 text-sm">
              © 2025 <span className="font-bold font-pacifico">PhotoSearch.</span> ❤️
              Martins Charles
            </p>
          </div>
        </div>
      </div>}
    </div>
    </>
  );
};

export default PhotoGallery;
