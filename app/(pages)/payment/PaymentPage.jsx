"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import {
    CardNumberElement, 
    CardExpiryElement, 
    CardCvcElement, 
    useStripe, 
    useElements 
} from '@stripe/react-stripe-js'

const PaymentPage = () => {
    const stripe = useStripe();
    const elements = useElements();
    
    // --- جلب البيانات من Redux ---
    const cartState = useSelector(state => state.cart);
    const cartItems = Array.isArray(cartState) ? cartState : (cartState?.items || []);

    // --- الحسابات ---
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryCharge = 160.00; // القيمة الظاهرة في الصورة
    const total = subtotal + deliveryCharge;

    // --- حالة الفورم ---
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [cardName, setCardName] = useState('');

    // خيارات تنسيق حقول Stripe لتطابق الصورة
    const elementOptions = {
        style: {
            base: {
                fontSize: '15px',
                color: '#1a1a1a',
                fontFamily: 'sans-serif',
                '::placeholder': { color: '#aab7c4' },
            },
            invalid: { color: '#ef4444' },
        },
    };

    const handlePay = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        // محاكاة عملية الدفع (في الحقيقة تحتاج PaymentIntent من السيرفر)
        setTimeout(() => {
            alert("Payment Successful! Your order is being processed.");
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="bg-[#f2f2f2] min-h-screen flex items-center justify-center p-4 md:p-8 font-sans">
            <div className="bg-white w-full max-w-[1100px] flex flex-col md:flex-row shadow-sm rounded-sm overflow-hidden">
                
                {/* 1. القسم الأيسر: Order Summary (ديناميكي) */}
                <div className="flex-1 p-8 md:p-14 border-r border-gray-100">
                    <div className="flex items-center gap-2 mb-10 text-gray-500">
                        <span className="text-sm font-medium">Course</span>
                        <span className="bg-[#fef3c7] text-[#f59e0b] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">Test Mode</span>
                    </div>

                    <p className="text-gray-400 text-sm font-medium">Pay Course</p>
                    <h2 className="text-[40px] font-bold text-[#1a1a1a] mb-12">
                        ₹{total.toFixed(2)}
                    </h2>

                    {/* قائمة المنتجات من السلة */}
                    <div className="space-y-8 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#1a1a1a] text-[15px]">{item.title}</span>
                                    <span className="text-gray-400 text-sm font-medium">Qty {item.quantity}</span>
                                    <span className="text-gray-300 text-[11px] font-medium">₹{item.price.toFixed(2)} each</span>
                                </div>
                                <span className="font-bold text-[#1a1a1a] text-[15px]">
                                    ₹{(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}

                        {/* مصاريف التوصيل */}
                        <div className="flex justify-between items-start pt-6 border-t border-gray-50">
                            <div>
                                <p className="font-bold text-[#1a1a1a] text-[15px]">Delivery Charge</p>
                                <p className="text-gray-400 text-sm font-medium">Qty 1</p>
                            </div>
                            <span className="font-bold text-[#1a1a1a] text-[15px]">₹{deliveryCharge.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* التذييل */}
                    <div className="mt-20 flex items-center gap-4 text-[11px] text-gray-400 font-medium">
                        <div className="flex items-center gap-1">
                            Powered by <span className="font-bold text-gray-500">stripe</span>
                        </div>
                        <button className="hover:underline">Terms</button>
                        <button className="hover:underline">Privacy</button>
                    </div>
                </div>

                {/* 2. القسم الأيمن: Stripe Form (تصميم دقيق) */}
                <div className="flex-1 p-8 md:p-14">
                    <form onSubmit={handlePay} className="max-w-[400px]">
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8">Pay with card</h3>
                        
                        <div className="space-y-5">
                            {/* Email */}
                            <div>
                                <label htmlFor="pay-email" className="block text-[13px] font-bold text-[#1a1a1a] mb-2">Email</label>
                                <input
                                    id="pay-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email@example.com"
                                    className="w-full border border-gray-200 rounded-[4px] p-2.5 text-[15px] focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-300 transition-all"
                                    required
                                />
                            </div>

                            {/* Card Info */}
                            <div>
                                <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2">Card information</label>
                                <div className="border border-gray-200 rounded-[4px] overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                                    <div className="p-3 border-b border-gray-200 relative">
                                        <CardNumberElement options={elementOptions} />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                                            <Image src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c2265c36394be55913253b2111.svg" alt="visa" width={26} height={16} className="h-4 w-auto" />
                                            <Image src="https://js.stripe.com/v3/fingerprinted/img/mastercard-6d9b047535496417f7c413b063d33299.svg" alt="master" width={26} height={16} className="h-4 w-auto" />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-1 p-3 border-r border-gray-200">
                                            <CardExpiryElement options={elementOptions} />
                                        </div>
                                        <div className="flex-1 p-3 relative">
                                            <CardCvcElement options={elementOptions} />
                                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cardholder Name */}
                            <div>
                                <label htmlFor="pay-cardname" className="block text-[13px] font-bold text-[#1a1a1a] mb-2">Cardholder name</label>
                                <input
                                    id="pay-cardname"
                                    type="text"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                    placeholder="Full name on card"
                                    className="w-full border border-gray-200 rounded-[4px] p-2.5 text-[15px] focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-300 transition-all"
                                />
                            </div>

                            {/* Country Selector */}
                            <div>
                                <label htmlFor="pay-country" className="block text-[13px] font-bold text-[#1a1a1a] mb-2">Country or region</label>
                                <div className="relative">
                                    <select id="pay-country" aria-label="Country or region" className="w-full border border-gray-200 rounded-[4px] p-2.5 text-[15px] bg-white outline-none appearance-none focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer">
                                        <option>India</option>
                                        <option>United States</option>
                                        <option>Egypt</option>
                                    </select>
                                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                                </div>
                            </div>

                            {/* زر الدفع الأزرق */}
                            <button 
                                type="submit"
                                disabled={!stripe || loading}
                                className="w-full bg-[#0070f3] text-white font-bold py-3.5 rounded-[4px] mt-6 hover:bg-[#0062d1] transition-all disabled:bg-gray-300"
                            >
                                {loading ? "Processing..." : "Pay"}
                            </button>
                        </div>
                    </form>

                    {/* رسالة تنبيه أسفل الصفحة */}
                    <div className="mt-12 text-[10px] text-gray-400 text-center md:text-left">
                        <p>Activate Windows</p>
                        <p>Go to Settings to activate Windows.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;