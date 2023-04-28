import { LayoutProps } from '@/models/commont';
import Link from 'next/link';
import React, { useEffect } from 'react'


export function MainLayout({ children }: LayoutProps) {

    useEffect(() => {
        console.log('MainLayout Mouting');

        return () => console.log('MainLayout UnMouting');
    }, [])

    return (
        <div>
            <h1>Main Layout</h1>

            <Link href="/">Home</Link><br></br>

            <Link href="/about">About</Link>

            <div>{children}</div>
        </div>
    );
}