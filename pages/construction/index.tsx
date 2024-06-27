import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { projects } from '../../lib/data';
import Construction from '../../components/pages/construction/Construction';


const Constructions = () => {

    return (
        <PageWrapper pageName="Constructions">
            {projects.map((project, index) => (
                <Construction key={index} {...project} />
            ))}
            <h2 className='absolute -left-[96vw] top-[48vh] z-[500] text-xl text-white'><span className='text-zinc-500'>Note:</span> Click on the images to view more.</h2>
        </PageWrapper >
    );
};

export default Constructions;
