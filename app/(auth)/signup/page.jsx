"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from 'next/navigation';

// 1. Define the Validation Schema
const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], 
});

const SignUpPage = () => {
    const router = useRouter()
  // 2. Initialize the Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  });

  // 3. Submit Function
  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);
      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
    
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
    router.push("/login")
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Join Us</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Username</label>
            <input
              {...register("username")}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition duration-200 outline-none ${
                errors.username ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200 focus:border-blue-400"
              }`}
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
            <input
              {...register("email")}
              type="email"
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition duration-200 outline-none ${
                errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200 focus:border-blue-400"
              }`}
              placeholder="name@company.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input
              {...register("password")}
              type="password"
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition duration-200 outline-none ${
                errors.password ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200 focus:border-blue-400"
              }`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              type="password"
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition duration-200 outline-none ${
                errors.confirmPassword ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200 focus:border-blue-400"
              }`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 mt-4 text-white font-bold bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transform active:scale-95 transition-all"
          >
            {isSubmitting ? "Processing..." : "Create Account"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;