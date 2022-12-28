import {PostCard, Categories, PostWidget} from "../components/";
import {getPosts} from "../services";
import { FeaturedPosts } from '../sections/index';
import Head from "next/head";

export default function blog({posts}) {
    return (
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Women in STEM</title>
          <link rel="icon" href="/logo.png"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>

        {/* <div className='w-11/12 text-black absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 mt-11'>
            <h1 className='text-2xl font-semibold sm:text-6xl sm:font-semibold'>Women in STEM</h1>
            <p className='inline-block text-black py-12 px-14 sm:mr-44 sm:ml-44 text-m sm:text-lg relative pointer text-center'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            <button type='btton' className='cursor-pointer text-2xl sm:text-4xl -mt-12 text-red-500 mb-40'>
                <Link href="/blog"> { Eliminar esta linea }
                <a target="_blank" href="https://www.instagram.com/womeninstem.udem/">
                    <i class="fa fa-instagram"></i>
                </a>
            </button>
        </div> */}
        
        <div className="mt-[500px]">
          <FeaturedPosts />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className='lg:col-span-8 col-span-1'>
            {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
            </div>
            <div className="lg:col-span-4 col-span-1">
                <div className='lg:sticky relative top-8'>
                <PostWidget />
                <Categories />
                </div>
            </div>
        </div>
      </div>
    )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: {posts},
    }
}





