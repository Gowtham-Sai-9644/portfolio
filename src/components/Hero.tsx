import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients for subtle Apple/Stripe-like aesthetic */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-background overflow-hidden -z-10">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-foreground mb-4">
              Nagalingam Gowtham Sai
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
              AI & Machine Learning Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
              I build AI-powered software and data-driven solutions that solve real-world problems through machine learning, analytics, and modern software engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10"
          >
            <Button size="lg" className="rounded-full shadow-sm hover:shadow-md transition-all" onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}>
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 ml-2">
              <Button size="icon" variant="ghost" className="rounded-full" asChild>
                <a href="https://linkedin.com/in/gowtham-sai-nagalingam-a29382379" target="_blank" rel="noreferrer">
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full" asChild>
                <a href="mailto:gowthamsainagalingam2005@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Contact</span>
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full" asChild>
                <a href="https://github.com/gowthamsainagalingam" target="_blank" rel="noreferrer">
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3"
          >
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">AI & ML</Badge>
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">Azure Certified</Badge>
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">AWS</Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-primary/30 text-primary bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2 animate-pulse" />
              Open to Work
            </Badge>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-primary/20 to-blue-500/20 backdrop-blur-sm border border-border/50">
            <div className="w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center relative">
              <img 
                src="/images/profile.jpg" 
                alt="Nagalingam Gowtham Sai" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
