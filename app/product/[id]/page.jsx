import ProductGallery from "../ProductGallery";

const ProductDetails = async ({ params }) => {
    const { id } = await params; 

    // جلب البيانات من السيرفر مباشرة
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        next: { revalidate: 3600 } // كاش لمدة ساعة
    });
    
    if (!res.ok) return <div className="p-20 text-center font-bold">Product Not Found</div>;
    const data = await res.json();

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* استدعاء مكون المعرض وإرسال الصور له */}
                <ProductGallery 
                    images={data.images} 
                    thumbnail={data.thumbnail} 
                    title={data.title} 
                />

                {/* باقي البيانات يتم رندرتها في السيرفر */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
                    
                    <div className="flex items-center gap-2 text-orange-400">
                        {"★".repeat(Math.round(data.rating))}
                        <span className="text-gray-500 text-sm ml-2">({data.rating})</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        {data.description}
                    </p>

                    <div className="flex items-baseline gap-4 mt-2">
                        <span className="text-4xl font-bold text-gray-900">${data.price}</span>
                        <span className="text-gray-400 line-through text-xl">
                            ${(data.price * 1.2).toFixed(2)}
                        </span>
                    </div>

                    <div className="mt-6 space-y-3">
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Brand:</span>
                            <span className="font-medium">{data.brand}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Category:</span>
                            <span className="font-medium capitalize">{data.category}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button className="flex-1 bg-gray-100 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 shadow-lg shadow-orange-200 transition">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;