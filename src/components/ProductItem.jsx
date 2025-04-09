import { Link } from 'react-router'
import _ from 'lodash'

function ProductItem({ product }) {
    return (
        <section className="pt-4 px-3 lg:px-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Link to={`/products/id/${product.id}`} className="block">
                    <img className="w-full h-60 object-cover object-center transition-all duration-300 ease-in-out hover:opacity-80" src={product.cover} alt={product.title} />
                </Link>
                <div className="p-4 bg-white dark:bg-gray-800">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {product.title}
                    </h4>
                    <h6 className="text-gray-600 dark:text-gray-300 mb-3">
                        {product.author}
                    </h6>
                    <p className="text-gray-700 dark:text-gray-400 opacity-80 mb-3">
                        {_.truncate(product.summary, { length: 60, omission: " ... " })}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <Link to={`/products/id/${product.id}`} className="text-blue-500 hover:text-blue-700 font-semibold flex items-center transition-colors duration-200">
                            See More
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span className="text-lg font-semibold text-green-500">
                            ${product.price}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductItem