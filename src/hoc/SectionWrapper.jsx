import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import SocialMedia from './SocialMedia';

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <>
            <div className='flex items-center justify-end'>
                <motion.section
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className={`${styles.padding} max-w-7xl mx-auto 
                    relative z-0`}
                >
                    <span className='hash-span' id={idName}>
                        &nbsp;
                    </span>
                    <Component />
                </motion.section>

                <motion.section
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className='max-w-7xl mx-auto absolute z-5 flex 
                    justify-end'
                >
                    <SocialMedia />
                </motion.section>
            </div>
        </>
    )
};

export default SectionWrapper;