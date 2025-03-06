import React, { useState, useEffect } from 'react';
import { searchPhotos } from '../api/unsplash';

const PhotoGallery = () => {
  const [query, setQuery] = useState('manchester');
  const [keyword, setKeyword] = useState('');
  const [photos, setPhotos] = useState([]);

  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setLoading(true);
    if(e){
        e.preventDefault();
    }
    setKeyword(query)
    const results = await searchPhotos(query, 1);
    setPhotos(results);
    setLoading(false);
  };

  const loadMorePhotos = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const newPhotos = await searchPhotos(query, nextPage);
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]); // Append new images
    setPage(nextPage);
    setLoading(false);
  };

  useEffect(()=>{
      handleSearch()
  },[])
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',  // "Thursday"
      month: 'long',    // "March"
      year: 'numeric',  // "2025"
    });
  };
  
  const today = new Date();
  return (
    <div className=''>
      <form className='h-[100vh] ' onSubmit={handleSearch}>
        <div className='md:p-[10rem] flex flex-col justify-center items-center bg-gray-100 h-[50vh]'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full p-10'>
            <h1 className='font-pacifico font-bold text-2xl md:text-gray-200'>PhotoSearch</h1>
            <h1 className=' md:text-gray-200'>{formatDate(today)}</h1>
        </div>
        <div className='flex p-6 w-full space-x-4'>
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for photos..."
            className='p-2 w-full rounded-lg focus:border-blue-500 focus:border-2 border-gray-200 border-[1px]'
            />
            <button className='bg-blue-600 px-2 py-0 text-white rounded-lg font-semibold' type="submit">Search</button>
          </div>
          </div>
      </form>
      <div className='md:px-[10rem] py-6 flex flex-col justify-center  md:bg-black'>
          <div className='p-4 -mt-[59vh]'>

          <p className='text-2xl mb-10 md:text-gray-200'>Showing results for <span className='underline decoration-dotted font-[700] capitalize'>{keyword}</span></p>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 '>

        {photos.map((photo) => (
            <div key={photo.id} className='relative border-gray-200 border-[1px] w-full bg-gray-100 rounded-lg'>
            <img  src={photo.urls.small} alt={photo.alt_description}  className='w-full h-[208px] rounded-t-lg '/>
              <p className='shadow-md md:text-gray-200 text-[12px] absolute bg-gray-100 rounded-full px-2 py-1 top-4 right-2'>❤️ {photo.likes}</p>
              <div className='flex justify-between items-center p-5'>
                <img key={photo.id} src={photo.user.profile_image.small} alt={photo.alt_description}  className='w-[28px] h-[28px] rounded-full border-black border-2' />
                <p className='md:text-gray-200'>{photo.user.username}</p>
              </div>
          </div>
            
            ))}
        </div>
        <div className='flex flex-col justify-center space-y-10 items-center '>
        <button onClick={loadMorePhotos} className='bg-white px-2 py-1 border-gray-200 border-[1px] rounded-[5px] font-semibold m-4 mb-10' type="submit">{loading ? 'Loading...' : 'Load More'}</button>
        <p className='text-gray-800 text-sm '>© 2025 <span className='font-bold font-pacifico'>PhotoSearch.</span> ❤️ Martins Charles</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PhotoGallery;
