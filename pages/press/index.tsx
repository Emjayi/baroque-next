import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PageWrapper from '../../components/PageWrapper';
import Project from '../../components/Project';
import HorizontalScroll from '../../components/horizontalScroll';
import projects from '../projects';
import Image from 'next/image';
import SanityImage from '../../components/sanityImage';

const Press = () => {


    return (

        <PageWrapper pageName="Press">
            <div className='grid grid-rows-1 grid-flow-col gap-10 text-white'>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
                <div><h1>Hello world</h1></div>
            </div>

        </PageWrapper >
    );
};

export default Press;
