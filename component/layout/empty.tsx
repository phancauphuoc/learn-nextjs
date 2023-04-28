import { LayoutProps } from '@/models/commont';
import Link from 'next/link';
import * as React from 'react'


export function EmptyLayout ({children}: LayoutProps){
    return(
        <div>
            {children}
        </div>
    );
}