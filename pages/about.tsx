import Header from '@/component/common/Header'
import { MainLayout, AdminLayout, EmptyLayout } from '@/component/layout'
import { NextPageWithLayout } from '@/models/commont'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export interface AboutPageProps { }

// const Header = dynamic(() => import('@/component/common/Header'), { ssr: false })

const About: NextPageWithLayout = (props: AboutPageProps) => {

    const [postList, setPostList] = useState([]);
    const router = useRouter();
    const page = Number(router.query?.page);
    console.log('router query: ', router.query);

    useEffect(() => {
        if (!page) return;
        (async () => {
            const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
            const data = await response.json();
            console.log('dataaa is: ', data)
            setPostList(data.data);
        })()
    }, [page])

    const handleNextPage = () => {
        router.push({
            pathname: '/about',
            query: {
                page: Number((page) || 1) + 1
            }
        },
            undefined,
            { shallow: true }
        )
    }


    return (
        <>
            <Header />
            <h1>About</h1>
            <ul>
                {postList.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <Link href="/">Home page</Link><br />
            <button onClick={handleNextPage}>Next page</button>
        </>
    )
}

// export async function getStaticProps() {
//     console.log('staticProps in about');
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }

export async function getServerSideProps(context: any) {

    context.res.setHeader('Cache-Control', 's-maxage=5');

    return {
        props: {}, // will be passed to the page component as props
    }
}

About.Layout = AdminLayout

export default About