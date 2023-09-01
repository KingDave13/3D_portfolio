import { SectionWrapper2 } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Footer = () => {
  return (
    <motion.div variants={fadeIn('', 'spring', 0.1)}>
        <div className='border-t-[1px] border-t-[#fff]'>

        </div>
    </motion.div>
  )
}

export default SectionWrapper2(Footer, '');