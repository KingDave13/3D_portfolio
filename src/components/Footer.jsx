import { SectionWrapper2 } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <motion.div variants={fadeIn('', 'spring', 0.1)}>
        <div className='border-t-[1px] border-t-[#fff] flex items-center
        justify-center'>
            <div className='flex mt-5 items-center'>
                <BiCopyright className='mr-2 text-[20px]'/>
                <p className='font-poppins font-medium text-center 
                text-[16px] leading-[27px] text-white'>
                    2023 David Okaliwe. &nbsp;
                    <span className='font-light'>
                        All Rights Reserved.
                    </span>
                </p>            
            </div>
        </div>

        <div className='flex flex-row mt-5 items-center
        justify-center'>
            <a 
                target='_blank'
                href='https://twitter.com/DavidOkaliwe'
            > 
                <BsTwitter />
            </a>

            <a 
                target='_blank'
                href='https://twitter.com/DavidOkaliwe'
            > 
                <BsTwitter />
            </a>

            <a 
                target='_blank'
                href='https://twitter.com/DavidOkaliwe'
            > 
                <FaLinkedinIn />
            </a>
		</div>
    </motion.div>
  )
}

export default SectionWrapper2(Footer, '');