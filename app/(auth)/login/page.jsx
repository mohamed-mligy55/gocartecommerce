"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link"; // للانتقال لصفحة التسجيل
import { useRouter } from 'next/navigation';
import { loginAction } from '@/auth';
// 1. مخطط التحقق (Login Schema)
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const LoginPage = () => {
  // 2. إعداد الفورم
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  // 3. دالة الإرسال
  const onSubmit = async (data) => {
      try {
    // استدعاء الـ Server Action
    const result = await loginAction(data);
    
    if (result.success) {
      // بعد ما السيرفر يحط الكوكي، بنحول المستخدم للـ home
      router.push('/');
      router.refresh(); // مهم جداً عشان الـ Middleware يتأكد من الحالة الجديدة
    }
  } catch (error) {
    console.error("Login failed", error);
  }
    // محاكاة الاتصال بالسيرفر
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Please enter your details</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="name@company.com"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                errors.email 
                ? "border-red-500 focus:ring-2 focus:ring-red-100" 
                : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-50"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <input
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                errors.password 
                ? "border-red-500 focus:ring-2 focus:ring-red-100" 
                : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-50"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 disabled:bg-gray-400 transition-all shadow-lg shadow-gray-200"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;