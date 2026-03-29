"use client"
import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Users, Globe, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden" dir="ltr">
      
      {/* 1. Hero Section - واجهة الصفحة */}
      <section className="relative py-24 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full mb-6 shadow-sm">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Established 2026</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-black mb-8 tracking-tighter">
            We Build <br /> 
            <span className="text-gray-300 italic">The Future</span> of Retail.
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed">
            More than just a store. We are a community-driven platform dedicated to bringing high-quality products to your doorstep with a single click.
          </p>
        </div>
        {/* لمسة فنية في الخلفية */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-0" />
      </section>

      {/* 2. Brand Story - قصتنا */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" 
                alt="Store Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* المربع الأسود الطاير */}
            <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-[30px] hidden lg:block shadow-2xl z-20">
              <p className="text-4xl font-black mb-1">99%</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Customer Satisfaction</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-black leading-tight text-gray-900">
              Your trust is our <br />most valuable asset.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At our core, we believe that shopping should be an inspiration, not a chore. Every product in our catalog undergoes a rigorous 5-step quality check before it ever reaches our website.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-gray-800">Secure Payments & Data Privacy</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Globe size={20} />
                </div>
                <span className="font-bold text-gray-800">Eco-Friendly Global Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dark Values Section - القيم الأساسية */}
      <section className="mx-6 py-24 bg-black rounded-[50px] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 relative z-10 text-center md:text-left">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="text-blue-500 bg-blue-500/10 w-fit p-4 rounded-3xl mx-auto md:mx-0">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold pt-2">Community First</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We empower local creators and global brands to reach the right audience through our platform.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-green-500 bg-green-500/10 w-fit p-4 rounded-3xl mx-auto md:mx-0">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-2xl font-bold pt-2">Seamless UX</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Using cutting-edge tech like Next.js to ensure your shopping experience is lightning fast.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-purple-500 bg-purple-500/10 w-fit p-4 rounded-3xl mx-auto md:mx-0">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold pt-2">Curated Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't sell everything. We only sell the best versions of what you actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Simple Footer CTA */}
      <section className="py-32 text-center">
        <h2 className="text-3xl font-black mb-8">Ready to discover something new?</h2>
        <button  className=" cursor-pointer bg-black text-white px-12 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:bg-gray-800 transition-all hover:gap-5 active:scale-95 shadow-xl shadow-gray-200">
          Start Shopping Now <ArrowRight size={20} />
        </button>
      </section>

    </div>
  );
};

export default AboutPage;