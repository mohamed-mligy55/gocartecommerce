import Image from "next/image";
import Banner from "./(pages)/banner/banner"
import Products from "./(pages)/products"
import { Send, RotateCcw, Headphones } from 'lucide-react';
import Link from "next/link";
import boylaptop from "../public/images/boy_with_laptop_image.19edbd3e.png"
import girlphone from "../public/images/girl_with_earphone_image.604badd7.png"
export default function Home() {
  const specs = [
    {
      title: "Free Shipping",
      icon: <Send className="w-6 h-6 text-white" />,
      bgColor: "bg-[#00c853]", // اللون الأخضر
      cardBg: "bg-[#f0fff4]",
    },
    {
      title: "7 Days easy Return",
      icon: <RotateCcw className="w-6 h-6 text-white" />,
      bgColor: "bg-[#ff9100]", // اللون البرتقالي
      cardBg: "bg-[#fffaf0]",
    },
    {
      title: "24/7 Customer Support",
      icon: <Headphones className="w-6 h-6 text-white" />,
      bgColor: "bg-[#9d8df1]", // اللون البنفسجي
      cardBg: "bg-[#f5f3ff]",
    },
  ];
  return (
                <>
                <Banner/>
                <Products/>
          <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      {/* الرأس - Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#1a1c2e] mb-4">
          Our Specifications
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We offer top-tier service and convenience to ensure your shopping experience is 
          smooth, secure and completely hassle-free.
        </p>
      </div>

      {/* الكروت - Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <div 
            key={index} 
            className={`${spec.cardBg} rounded-xl p-8 flex flex-col items-center justify-center relative mt-8 transition-transform hover:scale-105`}
          >
            {/* الأيقونة العلوية */}
            <div className={`${spec.bgColor} p-3 rounded-lg absolute -top-6 shadow-lg`}>
              {spec.icon}
            </div>
            
            {/* النص */}
            <h3 className="text-lg font-semibold text-[#1a1c2e] mt-4">
              {spec.title}
            </h3>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full max-w-6xl mx-auto p-4">
      <div className="relative overflow-hidden bg-[#f0f4f9] rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] text-center">
        
        {/* السماعات - جهة اليسار */}
        <div className="absolute left-[-20px] md:left-10 top-1/2 -translate-y-1/2 w-48 md:w-72 h-auto hidden sm:block">
          <Image 
            src="/images/jbl_soundbox_image.c02bcfd7.png" // استبدل بمسار صورتك
            alt="JBL Speakers"
            className="object-contain drop-shadow-xl rotate-[-10deg]"
            width={250 }
            height={250}
          />
        </div>

        {/* محتوى النص - المنتصف */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-xl md:text-4xl font-bold text-[#1a2b3c] mb-4 leading-tight">
            Level Up Your <br /> Gaming Experience
          </h1>
          <p className="text-[#5f6368] text-lg md:text-xl mb-8">
            From immersive sound to precise controls—everything you need to win
          </p>
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 bg-[#e85a0e] hover:bg-[#d44d0b] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Buy now 
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* الكنترولر - جهة اليمين */}
        <div className="absolute right-[-40px] md:right-5 bottom-[-20px] md:bottom-10 w-56 md:w-80 h-auto hidden sm:block">
          <Image 
            src="/images/md_controller_image.036005e4 (1).png" // استبدل بمسار صورتك
            alt="Xbox Controller"
            className="object-contain drop-shadow-2xl rotate-[-20deg]"
            width={250}
            height={250}
          />
        </div>

        {/* كنترولر إضافي علوي (اختياري كما في الصورة) */}
        <div className="absolute right-0 top-0 w-32 opacity-80 hidden lg:block">
            <img src="/controller-top.png" alt="" className="rotate-[-20deg]" />
        </div>

      </div>
    </section>

  <main className="px-20 py-16 text-center font-sans">
      
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-10 relative inline-block">
        Featured Products
        <span className="block w-16 h-[3px] bg-orange-500 mx-auto mt-2"></span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-8 mt-10">

        {/* Card 1 */}
        <div className="relative h-[400px] rounded-md overflow-hidden group">
          <Image src="/images/girl_with_headphone_image.8cdb8255.png" alt="" fill   className="object-cover " />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white text-left">
            <h3 className="text-xl font-semibold mb-2">
              Unparalleled Sound
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Experience crystal-clear audio with premium headphones.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm rounded w-fit">
              Buy now ↗
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[400px] rounded-md overflow-hidden group">
          <Image src={girlphone} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white text-left">
            <h3 className="text-xl font-semibold mb-2">
              Stay Connected
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Compact and stylish earphones for every occasion.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm rounded w-fit">
              Buy now ↗
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[400px] rounded-md overflow-hidden group">
          <Image src={boylaptop}  alt="boy laptob" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white text-left">
            <h3 className="text-xl font-semibold mb-2">
              Power in Every Pixel
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Shop the latest laptops for work, gaming, and more.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm rounded w-fit">
              Buy now ↗
            </button>
          </div>
        </div>

      </div>
    </main>             

                  </>                                  
  );
}
