import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';
import PageWrapper from '../../components/PageWrapper';
import Project from '../../components/Project';
import HorizontalScroll from '../../components/horizontalScroll';
import projects from '../projects';
import Image from 'next/image';
import SanityImage from '../../components/sanityImage';

const Press = () => {
    const [posts, setPosts] = useState([]);

    // This TypeScript code fetches posts from a Sanity database and sets them in the state using React's useEffect hook

    useEffect(() => {
        const getPosts = async () => {
            const query = `
                *[_type == "post"] {
                    title,
                    slug,
                    "image": mainImage.asset->url,
                    "blur": mainImage.asset->metadata.lqip,
                    alt,
                    categories
                }
            `;
            try {
                const data = await client.fetch(query);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        getPosts();
    }, []);

    return (
        // <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        //     {posts.map((post) => (
        //         <article key={post.slug}>
        //             <Link href={`/press/${post.slug.current}`}><h1 className='text-white'>{post.title}</h1></Link>
        //             <div className=' flex justify-center items-center'></div>
        //             {/* Render other post data as needed */}
        //         </article>
        //     ))}
        // </main>
        <PageWrapper pageName="Press">

            <div className=' h-full'>
                <HorizontalScroll>
                    <div className='grid grid-flow-col grid-rows-2 gap-5'>
                        {posts.map((post) => (
                            <>
                                {(post.image != null) &&
                                    <div className='text-white w-52 h-64'>
                                        <Link href={`/press/${post.slug.current}`}>
                                            <Image className='' src={post.image} width={500} height={500} alt={post.alt} placeholder='blur' blurDataURL={post.blur} />
                                            <h1>{post.title}</h1>
                                        </Link>
                                    </div >}
                            </>
                        ))}
                    </div>
                </HorizontalScroll>
            </div >
        </PageWrapper >
    );
};

export default Press;
