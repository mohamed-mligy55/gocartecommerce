import Image from 'next/image';
import Link from 'next/link';
import heroimg from "../../../public/images/hero_model_img.png";
import heroimg1 from "../../../public/images/hero_product_img1.png";
import heroimg2 from "../../../public/images/hero_product_img2.png";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        
        {/* Banner الكبير (الأخضر) */}
        <div className="md:col-span-2 bg-[#BCF0D1] rounded-[40px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[280px] md:min-h-[450px] text-center md:text-left">
          <div className="z-10 flex flex-col items-center md:items-start gap-5 md:gap-6 max-w-lg">
            <div className="flex items-center gap-2 bg-[#00A859] text-white px-3 py-1 rounded-full w-fit text-xs sm:text-sm font-medium">
              <span className="bg-white text-[#00A859] px-2 py-0.5 rounded-full text-xs font-bold">NEWS</span>
              Free Shipping on Orders Above $50! <span>→</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3A4B] leading-tight">
              Gadgets you&apos;ll love. <br />
              Prices you&apos;ll trust.
            </h1>

            <div className="mt-4">
              <p className="text-sm text-[#2D3A4B] mb-1">Starts from</p>
              <p className="text-4xl font-bold text-[#2D3A4B]">$4.90</p>
            </div>

            <Link href="/shop" className="bg-[#1C2733] text-white px-8 py-4 rounded-xl font-bold w-fit mt-4 hover:bg-opacity-90 transition-all uppercase tracking-wider">
              Learn More
            </Link>
          </div>

          {/* الصورة الرئيسية - مخفية على الشاشات الصغيرة */}
          <div className="relative w-full h-full hidden md:flex justify-end items-end">
            <Image
              src={heroimg}
              alt="Hero Model"
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 100vw"
              className="w-full h-auto"
              priority // ميزة مهمة لصور الـ Hero لسرعة التحميل (LCP)
            />
          </div>
        </div>

        {/* الجانب الأيمن (الـ Small Banners) */}
        <div className="flex flex-col gap-6">
          
          {/* الكارت البرتقالي */}
          <div className="bg-[#FFE5C1] rounded-[40px] p-6 md:p-8 flex justify-between items-center flex-1 min-h-[160px] sm:min-h-[215px]">
            <div>
              <h3 className="text-3xl font-bold text-[#2D3A4B] leading-snug">Best <br /> products</h3>
              <Link href="/products" prefetch={false} className="text-sm font-medium text-[#2D3A4B] mt-2 flex items-center gap-1 hover:underline">
                View more <span>→</span>
              </Link>
            </div>
            <Image
              src={heroimg1}
              alt="Airpods"
              className="hidden sm:block object-contain w-[150px] lg:w-[200px] h-auto" // مخفية على الشاشات الصغيرة
            />
          </div>

          {/* الكارت الأزرق */}
          <div className="bg-[#D3E3F1] rounded-[40px] p-6 md:p-8 flex justify-between items-center flex-1 min-h-[160px] sm:min-h-[215px]">
            <div>
              <h3 className="text-3xl font-bold text-[#4F7097] leading-snug">20% <br /> discounts</h3>
              <Link href="/discounts" prefetch={false} className="text-sm font-medium text-[#4F7097] mt-2 flex items-center gap-1 hover:underline">
                View more <span>→</span>
              </Link>
            </div>
            <Image
              src={heroimg2}
              alt="Smart Watch"
              className="hidden sm:block object-contain w-[120px] lg:w-[150px] h-auto" // مخفية على الشاشات الصغيرة
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Banner;