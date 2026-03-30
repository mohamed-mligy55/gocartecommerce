"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Minus, Plus, ChevronRight, ArrowLeft } from 'lucide-react'
// استيراد الأكشنز من ملف الـ Slice الخاص بك
import { addtocart, decreaseQuantity, deletefromcart } from '../../slice/cartslice' 
import Link from 'next/link'

const CartPage = () => {
    const dispatch = useDispatch();
    
    // جلب البيانات من Redux
    const cartState = useSelector(state => state.cart);
    // التأكد من الوصول للمصفوفة سواء كانت الحالة هي المصفوفة نفسها أو كائن يحتوي على items
    const cartItems = Array.isArray(cartState) ? cartState : (cartState?.items || []);

    // --- الحسابات البرمجية ---
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const taxAmount = subtotal * 0.02; // ضريبة 2%
    const total = subtotal + taxAmount;

    return (
        // الخلفية الرمادية الفاتحة لإظهار المسافات بين العناصر
        <div className="bg-[#f2f2f2] min-h-screen p-6 md:p-12 font-sans text-[#1a1a1a]">
            
            {/* الحاوية الرئيسية مع وجود Gap (مسافة) بين القسمين */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
                
                {/* القسم الأيسر: Your Cart (خلفية بيضاء منفصلة) */}
                <div className="flex-[3] bg-white p-8 md:p-10 shadow-sm rounded-sm self-stretch">
                    
                    {/* الهيدر */}
                    <div className="flex justify-between items-end border-b border-gray-100 pb-6 mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
                            Your <span className="text-[#f16e00]">Cart</span>
                        </h1>
                        <span className="text-gray-400 font-bold text-lg">
                            {cartItems.length} Items
                        </span>
                    </div>

                    {/* هيدر الجدول التوضيحي */}
                    <div className="grid grid-cols-12 text-[10px] font-black text-gray-300 uppercase tracking-[2px] mb-8 px-2">
                        <div className="col-span-6">Product Details</div>
                        <div className="col-span-2 text-center">Price</div>
                        <div className="col-span-2 text-center">Quantity</div>
                        <div className="col-span-2 text-right">Subtotal</div>
                    </div>

                    {/* قائمة المنتجات */}
                    <div className="space-y-10">
                        {cartItems.map((item) => (
                            <div key={item.id} className="grid grid-cols-12 items-center px-2">
                                
                                {/* تفاصيل المنتج */}
                                <div className="col-span-6 flex items-center gap-6">
                                    <div className="w-24 h-24 bg-[#f8f8f8] border border-gray-100 rounded flex items-center justify-center p-2">
                                        <img src={item.thumbnail} alt={item.title} className="max-h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[15px] font-bold text-gray-800 leading-tight">
                                            {item.title}
                                        </p>
                                        <button 
                                            onClick={() => dispatch(deletefromcart(item))}
                                            className="text-[11px] font-bold text-[#f16e00] hover:underline w-fit uppercase"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                {/* السعر */}
                                <div className="col-span-2 text-center font-bold text-gray-500">
                                ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                {/* التحكم في الكمية */}
                                <div className="col-span-2 flex justify-center items-center gap-4">
                                    <button 
                                        onClick={() => dispatch(decreaseQuantity(item))}
                                        className="text-gray-300 hover:text-[#f16e00] transition-colors"
                                    >
                                        <Minus size={18} strokeWidth={3} />
                                    </button>
                                    <span className="border border-gray-200 px-4 py-1.5 text-sm font-bold text-gray-700 min-w-[45px] text-center">
                                        {item.quantity}
                                    </span>
                                    <button 
                                        onClick={() => dispatch(addtocart(item))}
                                        className="text-gray-300 hover:text-[#f16e00] transition-colors"
                                    >
                                        <Plus size={18} strokeWidth={3} />
                                    </button>
                                </div>

                                {/* المجموع الفرعي */}
                                <div className="col-span-2 text-right font-bold text-gray-900 text-lg">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* زر الاستمرار في التسوق */}
                    <button className="mt-16 flex items-center gap-2 text-[#f16e00] font-bold text-sm hover:translate-x-[-4px] transition-transform">
                        <ArrowLeft size={18} strokeWidth={3} /> Continue Shopping
                    </button>
                </div>

                {/* القسم الأيمن: Order Summary (كتلة بيضاء منفصلة) */}
                <div className="flex-1 bg-white p-8 md:p-10 shadow-sm rounded-sm w-full lg:max-w-[400px]">
                    <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-6 mb-8 uppercase tracking-tight">
                        Order Summary
                    </h2>
                    
                    {/* اختيار العنوان */}
                    <div className="mb-6">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Select Address</label>
                        <div className="bg-white border border-gray-200 p-4 rounded-sm flex justify-between items-center text-sm text-gray-500 cursor-pointer hover:border-[#f16e00] transition-colors">
                            Select Address
                            <ChevronRight size={18} className="text-gray-300" />
                        </div>
                    </div>

                    {/* البرومو كود */}
                    <div className="mb-10">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Promo Code</label>
                        <input 
                            type="text" 
                            placeholder="Enter promo code" 
                            className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#f16e00] mb-4 bg-white"
                        />
                        <button className="bg-[#f16e00] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#d46100] transition-colors rounded-sm">
                            Apply
                        </button>
                    </div>

                    {/* الحسابات النهائية */}
                    <div className="border-t border-gray-100 pt-8 space-y-5">
                        <div className="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-tighter">
                            <span>Items {itemCount}</span>
                            <span>${subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-tighter">
                            <span>Shipping Fee</span>
                            <span className="text-gray-400">Free</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-tighter">
                            <span>Tax (2%)</span>
                            <span>${taxAmount.toFixed(0)}</span>
                        </div>
                        
                        {/* المجموع الكلي */}
                        <div className="flex justify-between text-2xl font-black text-gray-900 pt-6 border-t border-gray-100">
                            <span>Total</span>
                            <span>${total.toLocaleString()}</span>
                        </div>

                        {/* زر تنفيذ الطلب */}
                        <Link href="/payment">
                         <button className="w-full bg-[#f16e00] text-white py-5 font-bold rounded-sm mt-6 hover:bg-[#d46100] transition-all uppercase tracking-[2px] text-sm">
                            Place Order
                        </button>
                        </Link>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartPage;