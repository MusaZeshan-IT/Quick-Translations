import React from 'react';
import FaqImgSm from '../../assets/faq/faq-sm.png'
import FaqImgTab from '../../assets/faq/faq-tab.png'
import FaqImgXl from '../../assets/faq/faq-xl.png'
import Feature from '../Feature';
import Feature1 from '../../assets/uniqueFeatures/quality1.png'
import Feature2 from '../../assets/uniqueFeatures/quality2.png'
import Feature3 from '../../assets/uniqueFeatures/quality3.png'

const FaqQuestions = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <div className='font-bold tracking-wide'>
                    <h3 className='text-center text-[16.5px] text-[rgb(60,146,255)]'>Our Company FAQ</h3>
                    <h2 className='mt-3 text-3xl text-center text-[rgb(19,40,126)]'>Frequent Questions</h2>
                </div>
                <p className='text-center sm:w-[610px] w-full mt-5 leading-8 text-[rgb(129,135,150)]'>We are commited to answering all your questions regarding our services. It is our duty to help you by providing solutions to all of your problems.</p>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-x-24 gap-y-16 mt-16'>
                <div className='xl:w-[57%] lg:w-[52%] w-full border-8 border-blue-500 lg:block flex xl:h-[500px] lg:h-[500px] md:h-[520px] xs-custom:h-[370px] 2xs-custom:h-[500px] h-[380px] mt-10'>
                    <img className='xl:block hidden xl:h-[550px] w-full lg:relative bottom-10 left-10' src={FaqImgXl} alt="" />
                    <img className='lg:hidden xs-custom:block hidden xl:h-[450px] lg:h-full w-full lg:relative bottom-10 left-10' src={FaqImgTab} alt="" />
                    <img className='xl:hidden lg:block xs-custom:hidden block lg:h-[550px] h-full w-full lg:relative bottom-10 left-10' src={FaqImgSm} alt="" />
                </div>
                <div className='xl:w-[43%] lg:w-[48%] w-full'>
                    <h3 className='text-[rgb(60,146,255)] font-semibold text-[16.5px] tracking-wide'>High Professional Translation Agency</h3>
                    <h2 className='text-[rgb(19,40,126)] text-3xl font-black mt-3 xs-custom:xs-custom:w-[500px] leading-10'>Order Professional Translations & Interpreting in Just a Few Clicks</h2>
                    <p className='lg:mt-6 mt-4 text-[rgb(129,135,150)] leading-7'>Our team of professional translators and interpreters are ready to help you with any kind of translation. We have a team of translators who are well-trained and experienced.</p>
                    <div className='flex flex-col lg:gap-y-7 gap-y-9 lg:mt-12 mt-10'>
                        <Feature
                            imgUrl={Feature1}
                            title="Fast & Competitive Prices"
                            desc="Experience fast, professional translations with competitive pricing that doesn't compromise on quality or accuracy."
                        />
                        <Feature
                            imgUrl={Feature2}
                            title="Worldwide Translation Service"
                            desc="Trust our expansive network of translators for accurate and reliable global communication, anytime, anywhere."
                        />
                        <Feature
                            imgUrl={Feature3}
                            title="Dedicated Professional Team"
                            desc="Partner with our committed and skilled professionals for personalized solutions and outstanding outcomes."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqQuestions;
