"use client"; // هذا الجزء فقط هو الذي سيعمل لدى المتصفح
import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images, thumbnail, title }) {
  // الحالة الافتراضية هي الصورة المصغرة الأولى
  const [activeImage, setActiveImage] = useState(thumbnail || images[0]);

  return (
    <div>
      {/* الصورة الكبيرة */}
      <div className="relative bg-gray-100 rounded-xl p-8 mb-4 flex justify-center items-center h-80 md:h-96">
        <Image
          src={activeImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-8 transition-all duration-300"
        />
      </div>
      
      {/* الصور المصغرة */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images?.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 bg-white rounded-lg p-2 border-2 transition-all cursor-pointer ${
              activeImage === img ? "border-orange-500 scale-105" : "border-transparent hover:border-gray-200"
            }`}
          >
            <Image src={img} alt={`${title} ${index}`} fill sizes="80px" className="object-contain p-2" />
          </button>
        ))}
      </div>
    </div>
  );
}