import { SectionWrapper2 } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { socialMedia } from '../constants';

const Footer = () => {
  return (
    <motion.div variants={fadeIn('', 'spring', 0.1)}>
        <div className='border-t-[1px] border-t-[#fff] flex items-center
        justify-center'>
            <div className='flex mt-5 items-center'>
                <BiCopyright className='sm:mr-2 mr-1 text-[20px]'/>
                <p className='font-poppins font-medium text-center 
                sm:text-[16px] text-[15px] leading-[27px] text-white'>
                    2023 David Okaliwe. &nbsp;
                    <span className='font-light'>
                        All Rights Reserved.
                    </span>
                </p>            
            </div>
        </div>

        <div className='flex mt-5 items-center justify-center'>
            {socialMedia.map((social, index) => (
                <a target='_blank' key={social.id} href={social.link}>
                    <social.Icon 
                    className={`w-[21px] h-[21px] object-contain 
                    cursor-pointer ${index !== socialMedia.length -1 ? 
                    'mr-6' : 'mr-0' }`}
                    />
                </a>
            ))}
		</div>
    </motion.div>
  )
}

export default SectionWrapper2(Footer, '');haha