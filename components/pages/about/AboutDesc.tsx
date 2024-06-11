import { motion } from 'framer-motion';
import React from 'react';
import { useLanguage } from "../../../components/layout/LanguageContext"
import LangChanger from '../../layout/LangChanger';

const AboutDesc = () => {
    const { lang } = useLanguage();

    const aboutText = {
        en: "Here is the land of new opportunities and even a home where you can experience, learn, be supported, and in a word a place where you can live architecture. Doing professional and researching projects of architecture. Teaching architecture to young people, considering the lack of proper academic area in the north of Iran. Studying and providing innovative models to settle the shantytown and those who have been hurt by natural disasters. Designing fast-to-build houses for the times of emergency.Reviving and researching in architecture and local building techniques and preventing the local architecture from being faded into oblivion.",
        fa: "اینجا سرزمین فرصت های جدید و حتی خانه ای است که می توانید در آن تجربه کنید، یاد بگیرید، مورد حمایت قرار بگیرید و در یک کلام مکانی است که در آن می توانید معماری را زندگی کنید. انجام پروژه های تخصصی و پژوهشی معماری. آموزش معماری به جوانان با توجه به عدم وجود حوزه آکادمیک مناسب در شمال ایران. مطالعه و ارائه مدل های ابداعی برای اسکان در حلبی آباد و آسیب دیدگان بلایای طبیعی. طراحی خانه‌های سریع‌ساز برای مواقع اضطراری. احیاء و تحقیق در معماری و تکنیک‌های ساختمانی محلی و جلوگیری از فراموشی معماری بومی.",
        ar: "هنا هي أرض الفرص الجديدة وحتى منزل حيث يمكنك الاستمتاع والتعلم والحصول على الدعم، وفي كلمة مكان حيث يمكنك أن تعيش الهندسة المعمارية. إنجاز وبحث مشاريع هندسية. تدريس الهندسة المعمارية للشباب، مع مراعاة نقص المنطقة الأكاديمية المناسبة في شمال إيران. دراسة وتقديم نماذج مبتكرة لتسوية المناطق الشعبية والمتضررين من الكوارث الطبيعية. تصميم منازل سريعة البناء لأوقات الطوارئ. إحياء والبحث في الهندسة المعمارية وتقنيات البناء المحلية ومنع الهندسة المعمارية المحلية من الذوبان في النسيان."
    };

    return (
        <div className='flex h-[100dvh] justify-center items-center w-[550px] mr-12'>
            {lang === 'en' && (
                <>
                    <motion.h1
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, delay: 0.2 }}
                        className='absolute text-primary -rotate-90 left-[960px] w-52 text-2xl '
                    >
                        Where is Baroque?
                    </motion.h1>
                    <div className='md:w-[400px] w-[300px] md:ml-16 md:text-justify text-center'>
                        <h1 className='text-3xl uppercase text-zinc-500'>
                            <span className='text-primary text-xl'>BELOW IS FROM MRK</span>
                        </h1>
                        {aboutText[lang].split(' ').map((el, i) => (
                            <motion.span
                                key={i}
                                initial={{ x: -50, opacity: 0.2 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.25, delay: i / 100 }}
                                className='text-white'
                            >
                                {el}{' '}
                            </motion.span>
                        ))}
                    </div>
                </>
            )}
            {lang === 'ar' && (
                <>
                    <motion.h1
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, delay: 0.2 }}
                        className='absolute rotate-90 md:left-[1430px] persian mt-24 left-[1250px] text-white w-52 text-2xl '
                    >
                        باروک کجاست؟
                    </motion.h1>
                    <div className='md:w-[800px] w-[300px] md:mr-16 mr-16 ml-8 persian text-right'>
                        <h1 className='text-3xl uppercase text-zinc-500'>
                            <span className='text-primary text-xl'>متن زیر از سایت ام ار کی است</span>
                        </h1>
                        {aboutText[lang].split(' ').map((el, i) => (
                            <motion.span
                                key={i}
                                initial={{ x: -50, opacity: 0.2 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.25, delay: i / 100 }}
                                className='text-white'
                            >
                                {el}{' '}
                            </motion.span>
                        ))}
                    </div>
                </>
            )}
            {lang === 'fa' && (
                <>
                    <motion.h1
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, delay: 0.2 }}
                        className='absolute rotate-90 md:left-[1430px] persian mt-24 left-[1450px] text-white w-52 text-2xl '
                    >
                        باروک کجاست؟
                    </motion.h1>
                    <div className='md:w-[800px] w-[300px] md:mr-16 mr-16 ml-8 persian text-right'>
                        <h1 className='text-3xl uppercase text-zinc-500'>
                            <span className='text-primary text-xl'>متن زیر از سایت ام ار کی است</span>
                        </h1>
                        {aboutText[lang].split(' ').map((el, i) => (
                            <motion.span
                                key={i}
                                initial={{ x: -50, opacity: 0.2 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.25, delay: i / 100 }}
                                className='text-white'
                            >
                                {el}{' '}
                            </motion.span>
                        ))}
                    </div>
                </>
            )}
            <div className={(lang === 'en') ? 'flex p-1 justify-center items-center bg-primary/10 absolute top-[8dvh]' : 'flex p-1 items-center bg-primary/10 absolute md:top-12 top-20 text-right'}>{(lang === 'en') && <p className='text-white mx-2'>Langauage </p>}{(lang === 'ar') && <p className='text-white mx-2 order-1 persian'>زبان </p>}{(lang === 'fa') && <p className='text-white mx-2 order-1 persian'>زبان </p>}<LangChanger /></div>
        </div>
    );
};

export default AboutDesc;
