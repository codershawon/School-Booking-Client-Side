import React, { useState } from "react";
import Container from "../../../components/Container";

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (imageName) => {
    setHoveredImage(imageName);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  const images = [
    {
      src:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 1",
      caption: "Forever Bonded by Our Alma Mater 🎓",
    },
    {
        src:"https://images.unsplash.com/photo-1533854775446-95c4609da544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 2",
      caption: "A Journey Together, A Diploma Apart 🎓", 
    },
    {
        src:"https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
      alt: "Image 3",
      caption: "From Classmates to Lifelong Friends 🎓", 
    },
    {
        src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 4",
      caption: "Together We Achieved, Together We Succeeded 🎓", 
    },
    {
        src:
        "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 5",
      caption: "Cherishing Memories, Embracing Futures 🎓", 
    },
    {
        src:
        "https://images.unsplash.com/photo-1558168674-2505c71112eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 6",
      caption: "We Made It! Grateful for the Journey 🎓", 
    },
    {
        src:
        "https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 7",
      caption: "The End of an Era, The Start of New Beginnings 🎓", 
    },
    {
        src:
        "https://images.unsplash.com/photo-1633734973050-d6499a977c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 8",
      caption: "Friends Made in College, Friends for Life 🎓", 
    },
    {
        src:
        "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Image 9",
      caption: "One Chapter Closes, Another Begins 🎓", 
    },
  ];

  return (
    <Container>
    <div>
      <h1 className="text-center text-3xl font-bold mt-14 mb-6 uppercase">Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-10 w-[640px] md:w-[768px] lg:w-[1024px] mx-20 md:mx-auto lg:mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer relative"
            onMouseEnter={() => handleImageHover(image.caption)}
            onMouseLeave={handleImageLeave}
          >
            <img
              className="w-[500px] lg:w-full hover:opacity-90 transition-opacity duration-300"
              src={image.src}
              alt={image.alt}
            />
            {hoveredImage === image.caption && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-sm font-bold max-w-[100%] max-h-[100%] overflow-hidden w-[500px] md:w-full lg:w-full ">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </Container>

  );
};

export default Gallery;

