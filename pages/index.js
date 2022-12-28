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

        <div className="my-11">
          <h1 className="text-gray-600 font-semibold text-5xl text-center mb-5">Women In STEM</h1>
          <p className="text-center text-l sm:px-56 md:px-16">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
          (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera 
          que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
          en documentos electrónicos, quedando esencialmente igual al original.
          Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, 
          y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
        </div>

        <div>
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





