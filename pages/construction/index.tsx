import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import constructions from '../../lib/constructionsData';
import Construction from '../../components/pages/construction/Construction';


const Constructions = () => {

    return (
        <PageWrapper pageName="Constructions">
            {constructions.map(construction => (
                <Construction key={construction.id} {...construction} />
            ))}
        </PageWrapper >
    );
};

export default Constructions;
