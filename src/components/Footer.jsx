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

                <div className='flex flex-row md:mt-0 mt-6'>
						<a target='_blank'> 
                       
						</a>
				</div>
            </div>
        </div>
    </motion.div>
  )
}

export default SectionWrapper2(Footer, '');