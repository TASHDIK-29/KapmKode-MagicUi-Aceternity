import React from 'react';
import { OrbitingCirclesDemo } from './Banner';
import { StickyScrollRevealDemo } from './Scroller';
import { FloatingNav } from '../ui/floating-navbar';

const HomePage = () => {
    return (
        <div>
            <FloatingNav navItems={navItems} />
            <OrbitingCirclesDemo />
            <StickyScrollRevealDemo />
        </div>
    );
};

export default HomePage;


const navItems = [
    {
      name: "Home",
      link: "/",
    //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
    //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
    //   icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      
    },
  ];