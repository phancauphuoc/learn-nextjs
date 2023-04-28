import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface PostPageProps {
    posts: any[],
}

const index = ({ posts }: PostPageProps) => {

    console.log('post index posts ==>', posts);

    return (
        <div>
            <h1>Post data list</h1>
            <ul>
                {posts ? posts.map(post => <li key={post.id}>
                    <Link href={`post/${post.id}`}>{post.title}</Link>
                </li>) : <>dataNull</>}
            </ul>


        </div>
    )
}

export default index

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {

    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();
    // console.log(data);

    return {
        props: {
            posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
        }
    }
}

// export const getServerSideProps = async () => {    ===> can't using getServersideProps with getStaticProps or getStaticPath
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }