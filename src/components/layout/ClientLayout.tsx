"use client";

import { useState, useEffect } from 'react';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { CustomCursor } from '@/components/ui/CustomCursor';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMobile, setIsMobile] = useState(true); // Assume mobile initially for SSR safety

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile); // Check on resize

        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, []);

    return (
        <SmoothScroll>
            {!isMobile && <CustomCursor />}
            {children}
        </SmoothScroll>
    );
}
