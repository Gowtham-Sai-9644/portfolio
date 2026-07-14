import Section from "./Section"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Industrial Training",
    company: "LaunchEd Global",
    date: "2023 - Present",
    description: "Intensive industrial training focused on applying machine learning algorithms to real-world datasets, deploying models, and understanding end-to-end ML pipelines in production environments."
  },
  {
    title: "Generative AI Professional Training",
    company: "Oracle",
    date: "2023",
    description: "Specialized training in Generative AI technologies, including Large Language Models, prompt engineering, and integrating AI services within cloud infrastructure."
  }
]

export default function Experience() {
  return (
    <Section id="experience" title="Professional Development" subtitle="Continuous learning and industry training.">
      <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-3.5 top-1.5 h-7 w-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-semibold font-heading text-foreground">
                  {exp.title}
                </h3>
                <span className="inline-flex items-center text-sm font-medium text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-full whitespace-nowrap">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  {exp.date}
                </span>
              </div>
              
              <div className="flex items-center text-primary font-medium">
                <Briefcase className="mr-2 h-4 w-4" />
                {exp.company}
              </div>
              
              <p className="text-muted-foreground pt-2 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
