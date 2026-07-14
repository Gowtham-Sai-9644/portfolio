import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nagalingam Gowtham Sai. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/gowthamsainagalingam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/gowtham-sai-nagalingam-a29382379" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="mailto:gowthamsainagalingam2005@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </a>
        </div>
        
        <div className="mt-6 md:mt-0">
          <p className="text-sm text-muted-foreground">
            Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
