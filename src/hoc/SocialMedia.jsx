import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';


const SocialMedia = () => {
	return (
		<div className='app_social'>
			<div>
				<BsTwitter />
			</div>
			<div>
				<FaLinkedinIn />
			</div>
			<div>
				<BsGithub />
			</div>
			
		</div>
	)
}

export default SocialMedia;