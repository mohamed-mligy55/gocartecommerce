
"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import ProductCard from "../ProductCard";

// دالة جلب البيانات
const fetchProducts = async (page, search, category) => {
  const limit = 8;
  const skip = page * limit;
  let url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;

  if (category !== "all" && !search) {
    url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(url);
  return res.json();
};

export default function ProductsPage() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // استخدام React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page, search, category],
    queryFn: () => fetchProducts(page, search, category),
    keepPreviousData: true, // يحافظ على البيانات القديمة أثناء تحميل الجديدة لمنع الـ flickering
  });

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  return (
    <div className="container mx-auto p-6 bg-[#f8f9fa] min-h-screen">
      
      {/* الفلترة والبحث */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 p-3 rounded-xl border border-gray-200 shadow-sm outline-none focus:border-black transition-all"
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
        />
        <select
          className="p-3 rounded-xl border border-gray-200 shadow-sm bg-white outline-none cursor-pointer"
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(0);
          }}
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>

      {/* عرض المنتجات */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-pulse">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="h-[350px] bg-gray-200 rounded-[25px]"></div>
           ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* الـ Pagination باستخدام React Paginate */}
      <div className="mt-12 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next →"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={Math.ceil((data?.total || 0) / 8)}
          previousLabel="← Prev"
          renderOnZeroPageCount={null}
          // تنسيقات Tailwind لمكتبة React Paginate
          containerClassName="flex items-center gap-2 bg-white p-3 rounded-full shadow-md"
          pageClassName="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all font-medium"
          activeClassName="bg-black text-white hover:bg-black"
          previousClassName="px-4 py-2 font-bold text-sm hover:text-gray-600"
          nextClassName="px-4 py-2 font-bold text-sm hover:text-gray-600"
          disabledClassName="opacity-30 cursor-not-allowed"
        />
      </div>
    </div>
  );
}