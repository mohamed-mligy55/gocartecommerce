"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addtocart } from "../slice/cartslice"; // تأكد أن الملف بهذا المسار والاسم صحيح
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  // دالة التعامل مع الإضافة للسلة
  const handleAddToCart = (e) => {
    // لمنع الانتقال لصفحة المنتج عند الضغط على الزر إذا كان الزر داخل Link
    e.preventDefault(); 
    
    if (addtocart) {
      dispatch(addtocart(product));
      
      // تنبيه (Toast) بتصميم عصري
      toast.success(`${product.title} added to cart!`, {
        position: "bottom-right",
        duration: 3000,
        style: {
          borderRadius: '15px',
          background: '#1a1a1a',
          color: '#fff',
          fontSize: '14px',
          padding: '12px 20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        },
        iconTheme: {
          primary: '#22c55e',
          secondary: '#fff',
        },
      });
    }
  };

  return (
    <div className="bg-white rounded-[25px] p-4 relative flex flex-col group hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-gray-100">
      
      {/* أيقونة المفضلة */}
      <button className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors">
        ♡
      </button>

      {/* حاوية الصورة */}
      <Link href={`/product/${product.id}`}>
        <div className="bg-[#F6F6F6] rounded-[20px] h-[200px] flex items-center justify-center mb-4 overflow-hidden">
          <Image 
            src={product.thumbnail} 
            alt={product.title}
            width={150}
            height={150}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* تفاصيل المنتج */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-[17px] text-gray-900 truncate mb-1">
          {product.title}
        </h3>
        
        <p className="text-gray-500 text-xs mb-2 line-clamp-1">
          {product.description}
        </p>

        {/* التقييم */}
        <div className="flex items-center mb-4">
          <div className="flex text-green-600 text-xs">
            {"★".repeat(Math.floor(product.rating || 0))}
            <span className="text-gray-300">
              {"★".repeat(5 - Math.floor(product.rating || 0))}
            </span>
          </div>
          <span className="text-gray-400 text-[10px] ml-1">{product.rating}</span>
        </div>
      </div>

      {/* السعر والأزرار */}
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-extrabold text-gray-900">
            ${product.price}
          </span>
        </div>
        
        <div className="flex gap-2">
          {/* زر الإضافة للسلة */}
          <button 
            onClick={handleAddToCart}
            className="flex-1 cursor-pointer bg-black text-white py-2.5 rounded-full text-xs font-bold active:scale-95 hover:bg-gray-800 transition-all flex items-center justify-center gap-1.5"
          >
            <span className="text-base">+</span> Add to Cart
          </button>
          
          {/* زر الشراء السريع */}
          <button className="px-5 py-2.5 border border-gray-200 rounded-full text-xs font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}