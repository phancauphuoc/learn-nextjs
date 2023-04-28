import { LayoutProps } from '@/models/commont';
import Link from 'next/link';
import * as React from 'react'


export function AdminLayout ({children}: LayoutProps){
    return(
        <div>
            <h1>Admin Layout</h1>

            <Link href="/">Home</Link>
            <br></br>
            <Link href="/about">About</Link>

            <div>{children}</div>
        </div>
    );
}