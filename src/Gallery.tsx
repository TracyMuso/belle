import React, { useState } from 'react';
import { GalleryData } from './constants/Gallery';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Hair');
  const [tagFilter, setTagFilter] = useState('');

  // Filter items by tag
  const filteredItems =
    GalleryData.find((data) => data.category === activeTab)?.items.filter(
      (item) => item.tag.toLowerCase().includes(tagFilter.toLowerCase())
    ) || [];

  return (
    <div className="gallery py-12 px-10 md:px-20">
      <div className="tag-filter">
        <input
          type="text"
          placeholder="Search by tag..."
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="tabs mx-auto p-2">
        {GalleryData.map(({ category }) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`tab-button p-2 ${activeTab === category ? 'active font-bold text-pink-800' : 'text-pink-600'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map(({ image, tag }) => (
          <div key={tag} className="gallery-item">
            <img src={image} alt={tag} className="gallery-image" />
            <p className="gallery-tag">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
