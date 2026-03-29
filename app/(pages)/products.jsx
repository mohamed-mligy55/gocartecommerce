import ProductCard from './ProductCard';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products/category/mobile-accessories');
  if (!res.ok) throw new Error('فشل جلب البيانات');
  const data = await res.json();
  return data.products;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#FDFDFD] py-12 px-6 flex-col flex gap-30 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Popular products
        </h1>

        {/* شبكة المنتجات - Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0,8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Best Seller
        </h1>

        {/* شبكة المنتجات - Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.slice(5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}