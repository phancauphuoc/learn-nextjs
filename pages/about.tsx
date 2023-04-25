import React from 'react'

export interface AboutPageProps { }

const about = (props: AboutPageProps) => {
    return (
        <>
            about
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default about