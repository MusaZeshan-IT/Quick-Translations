import React from 'react';
import NavHero from '../components/Home/NavHero';
import HowItWorks from '../components/HowItWorks';
import UniqueFeatures from '../components/UniqueFeatures';
import Cover from '../components/Cover';
import CoveredLangs from '../components/CoveredLangs';

const Home = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <NavHero />
            <div className='px-28 flex flex-col gap-y-24'>
                <HowItWorks />
                <UniqueFeatures />
            </div>
            <Cover />
            <div className='px-28 flex flex-col gap-y-24'>
                <CoveredLangs />
            </div>
        </div>
    );
}

export default Home;
