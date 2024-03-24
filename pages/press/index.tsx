import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PageWrapper from '../../components/PageWrapper';
import Project from '../../components/Project';
import HorizontalScroll from '../../components/horizontalScroll';
import projects from '../projects';
import Image from 'next/image';

const Press = () => {


    return (

        <PageWrapper pageName="Press">
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><h1>Hello world</h1></div>
            <div className='w-24'><Link href='/projects' className='text-primary'>Hello world</Link></div>
        </PageWrapper >
    );
};

export default Press;
