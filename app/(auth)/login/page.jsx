"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation'; // أضفنا useSearchParams
import { loginAction } from '@/auth';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// فصلنا محتوى الفورم في مكون داخلي لاستخدام useSearchParams بأمان داخل Suspense
const  LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // جلب الـ callbackUrl من الرابط، وإذا لم يوجد نتوجه للرئيسية '/'
  const callbackUrl = searchParams.get('callbackUrl') || '/';

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

  const onSubmit = async (data) => {
    try {
      const res = await loginAction(data); 

      // نفترض أن loginAction تعيد نجاح العملية
      if (res?.success || !res?.error) {
        // التوجه للرابط المحفوظ (مثلاً /cart) ثم تحديث الصفحة
        router.push(callbackUrl);
        router.refresh(); 
      } else {
        alert(res?.error || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register("email")}
              id="email"
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
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <input
              {...register("password")}
              id="password"
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
            Don&apos;t have an account?{" "}
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