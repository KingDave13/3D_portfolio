import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Modal = ({ message, onClose, showOkButton }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center
     bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow flex flex-col
      items-center justify-center">
        <p className="text-center mb-4 font-medium text-tertiary">
          {message}
        </p>
        {showOkButton && (
          <button
            onClick={onClose}
            className="bg-tertiary text-white px-4 py-2 rounded-md"
          >
            OK
          </button>
        )}
      </div>
    </div>
  );
};

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [Loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setModalMessage('Please fill out all the required fields.');
      setModalOpen(true);
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_xfy39rq',
      'template_sy35l5o',
      {
        from_name: form.name,
        to_name: 'David',
        from_email: form.email,
        to_email: 'okaliwedavid@gmail.com',
        message: form.message,
      },
      'E-R_jyLgNaP5en5j-'
    )
    .then(
      () => {
        setLoading(false);
        setModalMessage('Thanks for reaching out, I will be in touch.');
        setModalOpen(true);

        setTimeout(() => {
          setModalOpen(false); 
        }, 3000);

        setForm({
          name: '',
          email: '',
          message: '',
        });
      },
      
      (error) => {
        setLoading(false);
        console.log(error);
        setModalMessage('Something went wrong');
        setModalOpen(true);
      }
    );
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex 
    gap-10 overflow-hidden'>

      {modalOpen && (
        <Modal message={modalMessage} 
        onClose={() => setModalOpen(false)} />
      )}

      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h2 className={styles.sectionHeadText}>
          Contact.
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 outline-none border-none
              placeholder:text-secondary text-white rounded-lg'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 outline-none border-none
              placeholder:text-secondary text-white rounded-lg'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea 
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What would you love to say to me?"
              className='bg-tertiary py-4 px-6 outline-none border-none
              placeholder:text-secondary text-white rounded-lg'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit
            text-white font-medium shadow-md shadow-primary rounded-xl'
          >
            {Loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');