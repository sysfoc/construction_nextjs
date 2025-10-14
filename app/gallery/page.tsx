"use client";

import { useState } from "react";

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState("All");

  const albums = [
    "All",
    "Residential",
    "Commercial",
    "Renovation",
    "Machinery",
  ];

  const galleryItems = [
    {
      id: 1,
      type: "photo",
      src: "/gallery/site_01.png",
      category: "Residential",
    },
    {
      id: 2,
      type: "photo",
      src: "/gallery/site_02.png",
      category: "Commercial",
    },
    { id: 3, type: "video", src: "/gallery/drone_01.mp4", category: "Renovation" },
    {
      id: 4,
      type: "photo",
      src: "/gallery/site_03.png",
      category: "Machinery",
    },
    {
      id: 5,
      type: "video",
      src: "/gallery/drone_01.mp4",
      category: "Residential",
    },
  ];

  const filteredItems =
    activeAlbum === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeAlbum);

  return (
    <main className='min-h-screen text-gray-900 dark:text-gray-100 px-6 py-16'>
      <section className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-extrabold text-[#ff6600] mb-3 uppercase tracking-tight'>
            Project Gallery
          </h1>
          <p className='dark:text-gray-300 max-w-2xl mx-auto'>
            Explore our work through photos and videos. Browse by category to
            see construction, renovation, and on-site progress.
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {albums.map((album) => (
            <button
              key={album}
              onClick={() => setActiveAlbum(album)}
              className={`px-5 py-2 rounded-full border border-[#ff6600] text-sm font-medium transition-all ${
                activeAlbum === album
                  ? "bg-[#ff6600] text-white"
                  : "text-[#ff6600] hover:bg-[#ff6600]/10"
              }`}
            >
              {album}
            </button>
          ))}
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all'
            >
              {item.type === "photo" ? (
                <img
                  src={item.src}
                  alt={item.category}
                  className='w-full h-56 object-cover hover:scale-105 transition-transform duration-300'
                />
              ) : (
                <video
                  controls
                  autoPlay
                  src={item.src}
                  className='w-full h-56 object-cover bg-black'
                ></video>
              )}
              <div className='p-4 text-center'>
                <p className='text-sm font-medium dark:text-gray-300'>
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className='text-center mt-10 text-gray-500 dark:text-gray-400'>
            No media found in this category.
          </div>
        )}
      </section>
    </main>
  );
}
