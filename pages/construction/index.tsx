import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import constructions from '../../lib/constructionsData'
import HorizontalScroll from '../../components/horizontalScroll';
import Construction from '../../components/Construction';


const Constructions = () => {

    return (
        <PageWrapper pageName="Constructions">

            <div className=' h-full'>

                <div className='grid items-end grid-flow-col min-h-64 grid-rows-1 pr-20'>
                    {constructions.map(construction => (
                        <Construction key={construction.id} {...construction} />
                    ))}
                </div>

            </div>
        </PageWrapper >
    );
};

export default Constructions;
