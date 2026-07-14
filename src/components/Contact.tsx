import Section from "./Section"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="I'm currently available for full-time opportunities. Let's connect!">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-6 md:p-8 flex items-center space-x-6">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                <a href="mailto:gowthamsainagalingam2005@gmail.com" className="text-lg font-medium hover:text-primary transition-colors hover:underline underline-offset-4">
                  gowthamsainagalingam2005@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-6 md:p-8 flex items-center space-x-6">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                <a href="tel:+919346494847" className="text-lg font-medium hover:text-primary transition-colors hover:underline underline-offset-4">
                  +91 9346494847
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-3">
                <div className="p-3 bg-muted rounded-full text-foreground">
                  <FaLinkedin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a href="https://linkedin.com/in/gowtham-sai-nagalingam-a29382379" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">Connect</a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-3">
                <div className="p-3 bg-muted rounded-full text-foreground">
                  <FaGithub className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a href="https://github.com/gowthamsainagalingam" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">Follow</a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 shadow-sm bg-muted/30">
            <CardContent className="p-6 flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <p className="font-medium text-foreground">Guntur, Andhra Pradesh, India</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/30 text-primary bg-primary/5">
          <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2 animate-pulse" />
          Available for Full-Time Opportunities
        </Badge>
      </motion.div>
    </Section>
  )
}
