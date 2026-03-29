"use client"; // هذا الجزء فقط هو الذي سيعمل لدى المتصفح
import { useState } from 'react';

export default function ProductGallery({ images, thumbnail, title }) {
  // الحالة الافتراضية هي الصورة المصغرة الأولى
  const [activeImage, setActiveImage] = useState(thumbnail || images[0]);

  return (
    <div>
      {/* الصورة الكبيرة */}
      <div className="bg-gray-100 rounded-xl p-8 mb-4 flex justify-center items-center h-80 md:h-96">
        <img 
          src={activeImage} 
          alt={title} 
          className="max-h-full object-contain transition-all duration-300" 
        />
      </div>
      
      {/* الصور المصغرة */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images?.map((img, index) => (
          <button 
            key={index} 
            onClick={() => setActiveImage(img)}
            className={`w-20 h-20 bg-white rounded-lg p-2 border-2 transition-all cursor-pointer ${
              activeImage === img ? "border-orange-500 scale-105" : "border-transparent hover:border-gray-200"
            }`}
          >
            <img src={img} alt={`${title} ${index}`} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}