"use client"
import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector(state => state.cart.items)
  console.log(cart)
  return (
    <header className="w-full font-sans">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#9b59ff] via-[#d65ec0] to-[#f3865f] px-4 py-2 flex items-center justify-between text-white">
        <div className="flex-1 text-center">
          <p className="text-sm font-medium">Get 20% OFF on Your First Order!</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-6 py-1.5 rounded-full text-sm font-semibold transition hover:bg-opacity-90">
            Claim Offer
          </button>
          <button className="hover:opacity-80 transition">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-100 px-4 py-4 md:px-12 flex items-center justify-between bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold flex items-center">
            <span className="text-[#10a345]">go</span>
            <span className="text-[#1d2d35]">cart</span>
            <span className="text-[#10a345]">.</span>
          </Link>
        </div>

        {/* Links & Search & Actions */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-[#4a5568] font-medium">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="/shop" className="hover:text-black transition">Shop</Link>
            <Link href="/about" className="hover:text-black transition">About</Link>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>
          </div>

          {/* Search Bar */}
          <div className="relative hidden lg:block w-72">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-[#f3f4f7] border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Cart & Login */}
          <div className="flex items-center gap-6">
            <Link href="/cart" className="flex items-center gap-1.5 text-[#1d2d35] hover:opacity-80 transition">
              <div className="relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-[#1d2d35] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              </div>
              <span className="font-medium">Cart</span>
            </Link>

           <div className="flex gap-4">
            <Link href="/login">
             <button className=" cursor-pointer bg-[#5c67ff] text-white px-8 py-2.5 rounded-2xl font-medium transition hover:bg-[#4a54e1] shadow-sm">
    Login
  </button>
            </Link>
 
  <Link href="/signup">
    <button className="border-2 cursor-pointer border-[#5c67ff] text-[#5c67ff] px-8 py-2.5 rounded-2xl font-medium transition hover:bg-[#5c67ff] hover:text-white shadow-sm">
    Signup
  </button>
  </Link>

</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;