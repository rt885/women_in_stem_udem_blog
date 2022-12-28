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
            <div className="border-b w-full inline-block border-[#dfffd6] py-8">
                <div className="md:float-left block">
                    <a href="/">
                        <img src="/logo.jpg" alt="logo" className="h-14 w-14 ml-32 mr-32 sm:h-16 sm:w-16 sm:ml-10 sm:mr-10" />
                    </a>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) =>(
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-4 align-middle text-gray-600 ml-4 font-semibold cursor-pointer transition duration-300 ease-in hover:text-purple-700'>
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

