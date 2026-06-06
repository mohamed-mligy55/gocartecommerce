import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // أيقونات SVG يدوية لضمان استقرار الكود مع Turbopack
  const icons = {
    facebook: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
    instagram: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
    ),
    twitter: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    ),
    mail: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    ),
    phone: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    ),
    mapPin: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    )
  };

  return (
    <footer className="bg-[#1a1c2e] text-white pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12 text-left">
          
          {/* العمود 1: العلامة التجارية */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight italic">
              TECH<span className="text-[#e85a0e]">STORE</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the market in gaming gear and premium mobile accessories since 2024. 
              Quality you can trust.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="p-2 bg-white/5 rounded-lg hover:bg-[#e85a0e] transition-all hover:-translate-y-1">{icons.facebook}</Link>
              <Link href="#" aria-label="Instagram" className="p-2 bg-white/5 rounded-lg hover:bg-[#e85a0e] transition-all hover:-translate-y-1">{icons.instagram}</Link>
              <Link href="#" aria-label="Twitter" className="p-2 bg-white/5 rounded-lg hover:bg-[#e85a0e] transition-all hover:-translate-y-1">{icons.twitter}</Link>
            </div>
          </div>

          {/* العمود 2: المتجر */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#e85a0e] pl-3">Shop</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/shop" prefetch={false} className="hover:text-[#e85a0e] transition-colors">All Products</Link></li>
              <li><Link href="/featured" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Featured Items</Link></li>
              <li><Link href="/new-arrivals" prefetch={false} className="hover:text-[#e85a0e] transition-colors">New Arrivals</Link></li>
              <li><Link href="/discounts" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* العمود 3: التصنيفات */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#e85a0e] pl-3">Categories</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/category/gaming" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Gaming Gear</Link></li>
              <li><Link href="/category/audio" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Audio & Music</Link></li>
              <li><Link href="/category/mobile" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Mobile Accessories</Link></li>
              <li><Link href="/category/laptops" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Laptops & PCs</Link></li>
            </ul>
          </div>

          {/* العمود 4: المساعدة */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#e85a0e] pl-3">Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/track-order" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Track Order</Link></li>
              <li><Link href="/shipping" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-[#e85a0e] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* العمود 5: معلومات التواصل */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#e85a0e] pl-3">Reach Us</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#e85a0e] mt-1">{icons.mapPin}</span>
                <span>Fifth Settlement, <br /> New Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#e85a0e]">{icons.phone}</span>
                <span>+20 100 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#e85a0e]">{icons.mail}</span>
                <span>info@techstore.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* الجزء السفلي: حقوق النشر والسياسات */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs">
            © {currentYear} TECHSTORE. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-xs text-gray-400">
            <Link href="/privacy" prefetch={false} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" prefetch={false} className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" prefetch={false} className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>

          {/* وسائل الدفع - نصوص بسيطة بتنسيق أنيق */}
          <div className="flex gap-4 items-center">
            <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold text-gray-400 border border-white/10">VISA</span>
            <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold text-gray-400 border border-white/10">MASTERCARD</span>
            <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold text-gray-400 border border-white/10">CASH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}