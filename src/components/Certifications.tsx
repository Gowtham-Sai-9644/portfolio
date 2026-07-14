import Section from "./Section"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"
import { Award, ExternalLink, ShieldCheck } from "lucide-react"

const certs = [
  {
    name: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2023",
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "2024",
  },
  {
    name: "Oracle Generative AI",
    issuer: "Oracle",
    date: "2023",
  },
  {
    name: "Machine Learning Industrial Training",
    issuer: "LaunchEd Global",
    date: "2023",
  }
]

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Professional credentials validating my expertise in AI and Cloud technologies.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="h-24 w-24 text-primary" />
              </div>
              <CardContent className="p-6 h-full flex flex-col relative z-10">
                <div className="p-2.5 w-fit rounded-lg bg-primary/10 text-primary mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 leading-tight flex-grow">{cert.name}</h3>
                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Verify Certificate">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
