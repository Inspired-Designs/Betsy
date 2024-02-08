import React, { useState } from 'react';
import imageLinks from '../imageData.js';
import '../styles/Image-Gallery.css';

const ImageGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imageLinks.length -1 : prevIndex - 1
        );
    };

    return (
        <div className="image-viewer">
            <div className="thumnail-and-main">
                <div className="thumnail-list">
                    {imageLinks.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
                <div className="main-image">
                    <button onClick={handlePrevImage}>Previous</button>
                    <img src={imageLinks[currentImageIndex]} alt="Main" />
                    <button onClick={handleNextImage}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
