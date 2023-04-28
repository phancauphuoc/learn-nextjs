import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

export interface PostDetailPageProps {
    post: any
}

const DetailPost = ({ post }: PostDetailPageProps) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
    }

    if (!post) return <>null</>;
    return (
        <>
            <div>Post Detail neee !!!</div>
            <p>{post ? post.title : 'null'}</p>
            <p>{post.author}</p>
            <p>{post.description}</p>
        </>
    )
}

export default DetailPost

export const getStaticPaths: GetStaticPaths = async () => {
    console.log('\nGET STATIC PATHS');
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();
    return {
        paths: data.data.map((post: any) => ({ params: { idPost: post.id } })),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (context) => {

    console.log('\nGET STATIC WITH PROPS', context.params?.idPost);

    const postId = context.params?.idPost;
    if (!postId) return { notFound: true }

    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
    const data = await response.json();
    // console.log(data);

    return {
        props: {
            post: data,
        },
    }
}