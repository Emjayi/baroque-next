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
        </PageWrapper >
    );
};

export default Constructions;
