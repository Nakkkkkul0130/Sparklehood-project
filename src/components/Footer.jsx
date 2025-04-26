import { FiGithub, FiHelpCircle } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} AI Safety Incident Interface
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:nakulbhar7308@gmail.com" 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Documentation"
            >
              <FiHelpCircle size={20} />
            </a>
            <a 
              href="https://github.com/Nakkkkkul0130" 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="GitHub repository"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer