import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-1">
    <div className="container mx-auto flex flex-col items-center">
      <div className="mb-4">
      <img
        className="w-26 h-26 flex-col items-center"
        src={'/LogoSinBack.png'}
        alt="LogoGS"
        width={228}
        height={288}
      />
      </div>
      <p className="text-sm text-gray-400">&copy; 2023 Guardian Security. All rights reserved.</p>
      <div className="mt-4 flex space-x-4">
        <a href={'/'} className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
          Home
        </a>
        <a href={'/services'} className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
          Services
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
          Contact
        </a>
      </div>
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
          Terms of Service
        </a>
      </div>
      <div className="mt-4">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
          Follow us on social media
        </a>

        <div className="mt-4 flex space-x-4">
        <FaFacebookF />
        <FaGoogle />
        <AiFillLinkedin />
        </div>

      </div>
    </div>
  </footer>
  )
}

export default Footer