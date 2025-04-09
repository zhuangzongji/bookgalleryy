import { useState } from "react";
import AddToBasket from "./AddToBasket";

function ProductDetail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

    return (
        <div data-theme="luxury" className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
            {/* 左側：產品圖片（佔6/24） */}
            <div className="lg:col-span-6 lg:col-start-3">
                <img
                    alt={product.title}
                    className="w-full h-96 object-cover object-center rounded-md transition-transform transform hover:scale-105"
                    src={product.cover}
                />
            </div>

            {/* 右側：產品資訊（佔14/24） */}
            <div className="lg:col-span-14 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">{product.title}</h1>
                <h2 className="text-gray-600 dark:text-gray-300 mb-1 text-xl">{product.author}</h2>
                <p className="text-gray-700 dark:text-gray-400 opacity-80 text-base mb-4">{product.summary}</p>

                {/* 價格與按鈕 */}
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold text-green-500">US${product.price}.00</p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        <span className="font-bold">Status</span>: {product.stock > 0 ? "In Stock" : "Unavailable."}
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <span className="font-bold text-gray-600 dark:text-gray-300">Qty:</span>
                        <select
                            className="select select-bordered w-24 text-lg"
                            defaultValue={product.stock > 0 ? 1 : 0}
                            onChange={event => setQty(Number(event.target.value))}
                        >
                            {[...Array(product.stock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                        <span className="font-bold">Total Price</span>: US${product.price * qty}
                    </p>
                    <div className="mt-6">
                        <AddToBasket product={product} qty={qty} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;