import { motion } from 'framer-motion';
import React from 'react';
import { useLanguage } from "../../../components/layout/LanguageContext"
import LangChanger from '../../layout/LangChanger';

const AboutDesc = () => {
    const { lang } = useLanguage();

    const aboutText = {
        en: "The foundation of Baroque Company was laid in 1982 when Engineer Hasan Roshanayi Moghadam graduated from Ferdowsi University of Mashhad (Civil Engineering) and entered the construction field. After years of significant projects, in 2010, he established Baroque Company with reputable partners to harness modern techniques and new-generation specialists. Baroque aims to improve building standards, offer innovative residential and commercial designs, respect climate-based architecture, and promote sustainability. We focus on workforce development, global standards, and professional integrity. At Baroque, we strive to elevate building quality and transform construction culture through the latest knowledge, top-tier software and hardware, and a strong professional conscience.",
        fa: "می‌توان گفت که سنگ بنای شرکت باروک در سال ۱۳۶۱ همزمان با فارغ التحصیلی جناب مهندس حسن روشنایی مقدم از دانشگاه دولتی فردوسی مشهد (در رشته ی راه و ساختمان) و ورود ایشان به عرصه فعالیت‌های عمرانی و ساختمانی گذاشته شد. ایشان پس از سال‌ها فعالیت مستمر در صنعت ساختمان و ساخت پروژه‌های بزرگ و مهم در سال ۱۳۸۹ و با همکاری با شرکای خوش‌نام و معتبر در این صنعت و با هدف بهره گیری از نسل جدید متخصصین و دانش و تکنیک‌های  به روز علمی و انجام مدرن فعالیت ساخت و ساز، اقدام به تاسیس شرکت باروک کردند. ایجاد ساز و کار هدفمند و تشکیلات هوشمند و به روز، ارتقای استانداردهای فنی و کیفی ساختمان‌ها، ارائه الگوهای نوآورانه به منظور بهبود کیفیت زیستی منازل مسکونی و محیط‌های تجاری، احترام به معماری مبتنی بر اقلیم و محیط زیست و توسعه ی پایدار، از جمله اهدافی هستند که باروک با ارتقا و توسعه ی فردی نیروهای خود و همچنین مسئولیت پذیری فراوان، توجه به استانداردهای جهانی و وفاداری حرفه ای، دنبال می‌کند. ما در باروک همواره تلاش کردیم با بهره گیری از دانش روز، استفاده از بهترین نرم افزار و سخت افزار و وجدان حرفه ای بیدار، هم سطح کیفی ساختمان ها را ارتقا بدهیم و هم فرهنگ ساخت و ساز را در جغرافیای خودمان متحول کنیم.",
        ar: "يمكن القول أن حجر الأساس لشركة باروك وُضع في عام 1982، بالتزامن مع تخرج المهندس حسن روشنائي مقدم من جامعة فردوسي مشهد(في مجال الهندسة المدنية) ودخوله إلى مجال الأنشطة الإنشائية والبنائية.بعد سنوات من النشاط المستمر في صناعة البناء وتنفيذ المشاريع الكبيرة والمهمة، قام في عام 2010، بالتعاون مع شركاء مرموقين ومعروفين في هذه الصناعة وبهدف الاستفادة من الجيل الجديد من المتخصصين والمعرفة العلمية الحديثة والتقنيات الحديثة للأنشطة الإنشائية الحديثة، بتأسيس شركة باروك.إنشاء آلية هادفة وتنظيم حديث وذكي، تحسين المعايير الفنية والجودة للمباني، تقديم نماذج مبتكرة لتحسين جودة المنازل السكنية والبيئات التجارية، احترام العمارة القائمة على المناخ والاستدامة البيئية، من بين الأهداف التي تسعى باروك لتحقيقها من خلال تطوير فردي لقواها العاملة، والمسؤولية الكبيرة، والالتزام بالمعايير العالمية، والولاء المهني.في باروك، كنا دائماً نسعى لتحسين المستوى النوعي للمباني وتحويل ثقافة البناء في جغرافيتنا من خلال الاستفادة من المعرفة الحديثة، واستخدام أفضل البرمجيات والمعدات، والحفاظ على ضمير مهني يقظ."
    };

    return (
        <div className='flex h-[100dvh] justify-center items-center w-[550px] mr-12'>
            {lang === 'en' && (
                <>
                    <motion.h1
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, delay: 0.2 }}
                        className='absolute text-primary -rotate-90 left-[990px] lg:left-[960px] w-52 top-[46%] text-2xl '
                    >
                        About Baroque
                    </motion.h1>
                    <div className='lg:w-[400px] w-[300px]  leading-5 lg:ml-16 lg:text-justify text-justify'>
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
                        className='absolute rotate-90 lg:left-[1430px] persian  mt-24 left-[1330px] text-primary top-[42%] w-52 text-2xl '
                    >
                        حول الباروك
                    </motion.h1>
                    <div className='lg:w-[800px] w-[300px] lg:mr-16 mr-16 text-sm lg:text-md ml-8 persian text-right'>
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
                        className='absolute rotate-90 lg:left-[1430px] persian mt-24 left-[1330px] text-primary top-[40%] w-52 text-2xl '
                    >
                        درباره باروک
                    </motion.h1>
                    <div className='lg:w-[800px] w-[300px] lg:mr-16 text-sm lg:text-md mr-16 ml-8 persian text-right'>
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
            <div className='flex p-1 justify-center items-center bg-primary/10 absolute top-[8dvh]'><p className='text-white mx-2'>Langauage </p><LangChanger /></div>
        </div>
    );
};

export default AboutDesc;
