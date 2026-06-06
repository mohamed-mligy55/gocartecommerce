
"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { Search } from "lucide-react";
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
  const [query, setQuery] = useState("");   // ما يكتبه المستخدم في الحقل
  const [search, setSearch] = useState(""); // المصطلح المُطبّق فعلياً على البحث
  const [category, setCategory] = useState("all");

  // البحث يحدث فقط عند الضغط على زر Search — لا بحث تلقائي ولا عند Enter
  const runSearch = () => {
    setSearch(query);
    setPage(0);
  };

  // استخدام React Query
  const { data, isLoading } = useQuery({
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
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={query}
            placeholder="Search for products..."
            aria-label="Search for products"
            className="flex-1 p-3 rounded-xl border border-gray-200 shadow-sm outline-none focus:border-black transition-all"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={runSearch}
            aria-label="Search"
            className="flex items-center gap-2 px-5 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-all cursor-pointer"
          >
            <Search size={18} />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
        <select
          aria-label="Filter by category"
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