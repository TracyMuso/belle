import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import '../../index.css';

// Example image data
const images = [
  'src/assets/images/fulani-braids.jpeg',
  'src/assets/images/ilash.jpeg',
  'src/assets/images/manicure.jpeg',
  'src/assets/images/full-face-beat.jpeg',
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="image-gallery pb-20 pt-10 md:px-16 px-8">
      <h1 className="text-center pb-8 text-4xl ">See our recent work</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery item ${index + 1}`}
            onClick={() => openModal(index)}
            className="gallery-image"
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="close-button" onClick={closeModal}>
          <FaTimes />
        </button>
        <div className="modal-body">
          <button className="nav-button" onClick={prevImage}>
            <FaArrowLeft />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Zoomed ${currentIndex + 1}`}
            className="modal-image"
          />
          <button className="nav-button-r" onClick={nextImage}>
            <FaArrowRight />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ImageGallery;
