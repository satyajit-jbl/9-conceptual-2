import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatments = () => {
    const services = useLoaderData()
    return (
        <div className='grid grid-cols-4 w-[80%] max-w-[1200px] mx-auto gap-6 mt-6'>
            {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
        </div>
    );
};

export default AllTreatments;