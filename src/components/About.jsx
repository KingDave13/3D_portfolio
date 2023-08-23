import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card'
      >
        <div options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'
          />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        I'm a versatile professional with extensive experience in 
        software development, graphic design and civil engineering. 
        Being a self-driven learner, I excel at leveraging modern 
        technologies to create visually striking web applications with 
        seamless user experiences. My expertise encompasses HTML5, CSS3, 
        Sass (SCSS), JavaScript, React, Next.js and API integration. 
        I'm deeply familiar with prevailing development trends and 
        continually seek to expand my knowledge. <br></br>
        In backend engineering, I adeptly work with technologies like 
        Node.js and Express, collaborating with databases such as 
        MongoDB and PostgreSQL to develop robust and swift APIs. 
        <br></br><br></br>
        If you're seeking an experienced frontend or backend developer to 
        contribute to a team focused on creating cutting-edge digital 
        products, I'm eager to discuss how I can help you achieve your 
        goals. <br></br>
        Please feel free to reach out to me to initiate this conversation 
        or ask any questions you may have.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default About;