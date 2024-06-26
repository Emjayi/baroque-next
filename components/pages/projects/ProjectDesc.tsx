import React from 'react'
import LangChanger from '../../layout/LangChanger'
import { motion } from 'framer-motion'
import { useLanguage } from '../../layout/LanguageContext';

const ProjectDesc = ({ project }: { project: any }) => {
    const { lang } = useLanguage();

    return (
        <div id='info' className='lg:px-8 text-white items-center flex text-sm lg:text-xl flex-col gap-5 justify-center flex-wrap bg-black/30 h-[100dvh] w-[100dvw] lg:w-[800px]'>
            < div className='flex py-[6px] justify-center items-center bg-primary/10 absolute top-[8dvh] text-[1rem]' ><p className='text-white mx-2'>Langauage </p><LangChanger /></div >
            {lang === 'en' && (
                <div className='flex pl-20 flex-col  gap-5 lg:justify-between flex-wrap lg:h-[300px]'>
                    {project.en.area && <motion.div initial={{ opacity: .1, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .4 }}><h1 className='text-zinc-500 font-bold'>Built area</h1><p className='text-[16px] w-72'>{project.en.area}</p></motion.div>}
                    {project.en.location && <motion.div initial={{ opacity: .1, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .6 }} className='my-5'><h1 className='text-zinc-500 font-bold'>Location</h1><p className='text-[16px] w-72'>{project.en.location}</p></motion.div>}
                    {project.en.year && <motion.div initial={{ opacity: .1, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .8 }} className=''><h1 className='text-zinc-500 font-bold'>Year</h1><p className='text-[16px] w-72'>{project.en.year}</p></motion.div>}
                    {project.en.area && <motion.div initial={{ opacity: .1, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}><h1 className='text-zinc-500 font-bold'>Project Manager</h1>{(project.en.projectManager).map((manager, index) => (<p className='text-[16px] w-72' key={index}>{manager}</p>))}</motion.div>}
                    {project.en.location && <motion.div initial={{ opacity: .1, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className='my-5'><h1 className='text-zinc-500 font-bold'>Type</h1><p className='text-[16px] w-72'>{project.en.type}</p></motion.div>}
                    {project.en.year && <motion.div initial={{ opacity: .1, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className=''><h1 className='text-zinc-500 font-bold'>Architect Group</h1><p className='text-[16px] w-72'>{project.en.architect}</p></motion.div>}
                </div>
            )}
            {lang === 'ar' && (
                <div className='flex persian text-right mr-20 lg:mr-40  flex-col lg:pl-0 gap-5 lg:justify-between flex-wrap lg:h-[300px]'>
                    {project.ar.area && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .4 }}><h1 className='text-zinc-500 font-bold'>المنطقة المبنية</h1><p className='text-[16px] w-72'>{project.ar.area}</p></motion.div>}
                    {project.ar.location && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .6 }} className='my-5'><h1 className='text-zinc-500 font-bold'>موقع</h1><p className='text-[16px] w-72'>{project.ar.location}</p></motion.div>}
                    {project.ar.year && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .8 }} className=''><h1 className='text-zinc-500 font-bold'>سنة</h1><p className='text-[16px] w-72'>{project.ar.year}</p></motion.div>}
                    {project.ar.area && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}><h1 className='text-zinc-500 font-bold'>مدير المشروع</h1>{(project.ar.projectManager).map((manager, index) => (<p className='text-[16px] w-72' key={index}>{manager}</p>))}</motion.div>}
                    {project.ar.location && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className='my-5'><h1 className='text-zinc-500 font-bold'>نوع</h1><p className='text-[16px] w-72'>{project.ar.type}</p></motion.div>}
                    {project.ar.year && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className=''><h1 className='text-zinc-500 font-bold'>مجموعة معمارية</h1><p className='text-[16px] w-72'>{project.ar.architect}</p></motion.div>}
                </div>
            )
            }
            {
                lang === 'fa' && (
                    <div className='flex persian mr-20 flex-col lg:mr-40 text-right lg:pl-0 gap-5 lg:justify-between flex-wrap lg:h-[300px]'>
                        {project.fa.area && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .4 }}><h1 className='text-zinc-500 font-bold'>مساحت</h1><p className='text-[16px] w-72'>{project.fa.area}</p></motion.div>}
                        {project.fa.location && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .6 }} className='my-5'><h1 className='text-zinc-500 font-bold'>مکان</h1><p className='text-[16px] w-72'>{project.fa.location}</p></motion.div>}
                        {project.fa.year && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .8 }} className=''><h1 className='text-zinc-500 font-bold'>سال</h1><p className='text-[16px] w-72'>{project.fa.year}</p></motion.div>}
                        {project.fa.area && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}><h1 className='text-zinc-500 font-bold'>مدیر پروژه</h1>{(project.fa.projectManager).map((manager, index) => (<p className='text-[16px] w-72' key={index}>{manager}</p>))}</motion.div>}
                        {project.fa.location && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className='my-5'><h1 className='text-zinc-500 font-bold'>نوع</h1><p className='text-[16px] w-72'>{project.fa.type}</p></motion.div>}
                        {project.fa.year && <motion.div initial={{ opacity: .1, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className=''><h1 className='text-zinc-500 font-bold'>گروه مهندسی</h1><p className='text-[16px] w-72'>{project.fa.architect}</p></motion.div>}
                    </div>
                )
            }

        </div >
    )
}

export default ProjectDesc
