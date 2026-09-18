import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const Media = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const images = [
    { src: "/gallery/1.webp", alt: "Gallery Image 1" },
    { src: "/gallery/2.webp", alt: "Gallery Image 2" },
    { src: "/gallery/3.webp", alt: "Gallery Image 3" },
    { src: "/gallery/4.webp", alt: "Gallery Image 4" },
  ];

  const videos = [
    { src: "/gallery-video-1.mp4" }
  ];

  const currentMediaList = activeTab === "images" ? images : videos;

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, index: 0 });
  };

  const nextMedia = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % currentMediaList.length,
    }));
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + currentMediaList.length) % currentMediaList.length,
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextMedia(e);
      if (e.key === "ArrowLeft") prevMedia(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.isOpen, currentMediaList.length]);

  return (
    <main>
      <SEO title="Media" description="Explore the Media page of SMART EDU EXPO - your premier educational exhibition and conference." />
      {/* Hero Section */}
      <section
        className="relative py-[120px] md:py-[150px] text-white overflow-hidden text-left bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: "url('/galaxy-bg.webp')" }}
      >
        <div className="container relative z-10">
          <div className="max-w-[750px]">
            <h1 className="text-[58px] leading-[75px] font-sora font-semibold text-white">
              Media
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-[60px] bg-[#ffedf5]">
        <div className="container mx-auto px-[20px]">
          {/* Tabs */}
          <div className="flex justify-center mb-[40px]">
            <div className="flex items-center gap-[40px] border-b border-gray-200">
              <button
                onClick={() => setActiveTab("images")}
                className={`text-[16px] pb-[10px] border-b-2 flex items-center gap-[8px] bg-transparent outline-none cursor-pointer px-[10px] transition-colors ${activeTab === 'images' ? 'text-[#632591] font-bold border-[#db2777]' : 'text-[#6b7280] font-medium border-transparent hover:text-[#632591]'}`}
              >
                <i className="fa-regular fa-image"></i> Images
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`text-[16px] pb-[10px] border-b-2 flex items-center gap-[8px] bg-transparent outline-none cursor-pointer px-[10px] transition-colors ${activeTab === 'videos' ? 'text-[#632591] font-bold border-[#db2777]' : 'text-[#6b7280] font-medium border-transparent hover:text-[#632591]'}`}
              >
                <i className="fa-solid fa-video"></i> Videos
              </button>
            </div>
          </div>

          {/* Gallery Grid Images */}
          {activeTab === "images" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {images.map((img, idx) => (
                <div key={idx} className="cursor-pointer rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] aspect-square bg-gray-200 border border-[rgba(0,0,0,0.05)] relative group" onClick={() => openLightbox(idx)}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gallery Grid Videos */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {videos.map((vid, idx) => (
                <div key={idx} className="cursor-pointer rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] aspect-video bg-gray-200 border border-[rgba(0,0,0,0.05)] relative group" onClick={() => openLightbox(idx)}>
                  <video src={vid.src} className="w-full h-full object-cover"></video>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-[60px] h-[60px] bg-[#db2777] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-play text-white text-2xl ml-1"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm" onClick={closeLightbox}>
          {/* Close Button */}
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[#db2777] text-4xl p-2 z-[10000] transition-colors">
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Previous Button */}
          {currentMediaList.length > 1 && (
            <button onClick={prevMedia} className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#db2777] text-5xl p-4 z-[10000] transition-colors">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          {/* Media Content */}
          <div className="max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center relative" onClick={(e) => e.stopPropagation()}>
            {activeTab === "images" ? (
              <img src={currentMediaList[lightbox.index].src} alt={currentMediaList[lightbox.index].alt} className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-[8px]" />
            ) : (
              <video src={currentMediaList[lightbox.index].src} controls autoPlay className="max-w-full max-h-full object-contain rounded-[8px] outline-none shadow-2xl" />
            )}
          </div>

          {/* Next Button */}
          {currentMediaList.length > 1 && (
            <button onClick={nextMedia} className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#db2777] text-5xl p-4 z-[10000] transition-colors">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}

          {/* Index Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium tracking-widest text-sm z-[10000]">
            {lightbox.index + 1} / {currentMediaList.length}
          </div>
        </div>
      )}
    </main>
  );
};

export default Media;
