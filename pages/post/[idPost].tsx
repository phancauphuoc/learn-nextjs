import { useRouter } from 'next/router'
import React from 'react'

export interface PostDetailPageProps { }

const DetailPost = (props: PostDetailPageProps) => {
    const router = useRouter();
    return (
        <>
            <div>Post Detail neee !!!</div>
            <p>Query: {JSON.stringify(router.query)}</p>
        </>
    )
}

export default DetailPost