import Section from "./Section"
import { Badge } from "./ui/badge"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL", "R", "TypeScript", "JavaScript"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "Scikit-learn", "Generative AI"]
  },
  {
    title: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Power BI", "Data Mining", "Data Warehousing"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Azure AI", "AWS", "Oracle Cloud"]
  },
  {
    title: "Developer Tools & Frameworks",
    skills: ["React", "Tailwind CSS", "Git", "GitHub", "FastAPI", "Flask"]
  }
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I use to build solutions.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category) => (
          <motion.div 
            key={category.title}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold font-heading text-foreground border-b pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill) => (
                <motion.div key={skill} variants={item}>
                  <Badge 
                    variant="secondary" 
                    className="px-3 py-1.5 text-sm font-medium bg-secondary/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
