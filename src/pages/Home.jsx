import React from 'react';
import NavHero from '../components/Home/NavHero';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <NavHero />
            <div className='px-28'>
                <HowItWorks />
            </div>
        </div>
    );
}

export default Home;
