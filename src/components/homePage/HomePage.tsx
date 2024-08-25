import React from 'react';
import { OrbitingCirclesDemo } from './Banner';
import { StickyScrollRevealDemo } from './Scroller';
import { FloatingNav } from '../ui/floating-navbar';

const HomePage = () => {
    return (
        <div>
            <FloatingNav />
            <OrbitingCirclesDemo />
            <StickyScrollRevealDemo />
        </div>
    );
};

export default HomePage;