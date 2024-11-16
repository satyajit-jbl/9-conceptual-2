import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    const services = useLoaderData()
    const {servicesData, feedBackData} = services;
    // console.log(services);
    return (
        <div className='w-[80%] max-w-[1200px] mx-auto gap-6 mt-6'>
           
            <Banner></Banner>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                {
                    servicesData.slice(0,4).map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
            <button  className='mx-auto block  btn btn-primary mt-4'><NavLink to="/allTreatments">Show More</NavLink></button>

            <FeedBack feedBackData={feedBackData}></FeedBack>
            
        </div>
    );
};

export default Home;