import React from 'react';
import { HomeIcon, StarIcon, SparklesIcon } from '@heroicons/react/20/solid'

const products = [
    {
        id: 1,
        name: 'Zoo Miami',
        price: '$149',
        rating: 5,
        reviewCount: 38,
        imageSrc: 'https://i0.wp.com/miamikidz.com/wp-content/uploads/2009/09/Continental-Park_sign.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 2,
        name: 'Tropical Park',
        price: '$15',
        rating: 5,
        reviewCount: 18,
        imageSrc: 'https://www.miamigrillcatering.com/miami-dade-parks/images/tropical-park.png',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Camp Owaissa',
        price: '$15',
        rating: 5,
        reviewCount: 14,
        imageSrc: 'https://media.glassdoor.com/l/106252/miami-dade-county-office.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Olympic Park',
        price: '$15',
        rating: 4,
        reviewCount: 21,
        imageSrc: 'https://i1.wp.com/miamikidz.com/wp-content/uploads/2009/06/OlympicPark_sign.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    // More products...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Home = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center same-size"
                                />
                            </div>
                            <div className="pt-10 pb-4 text-center">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <div className="mt-3 flex flex-col items-center">
                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                    'flex-shrink-0 h-5 w-5'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
                                </div>

                                <div className='m-6'>
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <SparklesIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                                        Visit Courts
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;