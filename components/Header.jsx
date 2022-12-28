import Link from "next/link"
import React, {useState, useEffect} from 'react';
import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-[#dfffd6] pb-3 sm:py-8">
                <div className="md:float-left block">
                    <a href="/">
                        <img src="/logo.jpg" alt="logo" className="h-14 w-14 mx-auto my-2 sm:h-16 sm:w-16" />
                    </a>
                </div>
                <div className='flex flex-col items-center md:float-left md:contents'>
                    {categories.map((category) =>(
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-1 sm:mt-6 align-middle text-gray-600 sm:ml-4 font-semibold cursor-pointer transition duration-300 ease-in hover:text-purple-700'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header

