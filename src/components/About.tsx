import Section from "./Section"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"
import { GraduationCap, Code2, BrainCircuit, Cloud, Database } from "lucide-react"

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <Section id="about" title="About Me" subtitle="My academic background and current areas of focus.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5 text-primary" /> Education
          </h3>
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">VIT-AP University</h4>
                  <p className="text-primary font-medium">B.Tech Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">Specialization in AI & ML with Data Science</p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Cumulative Grade Point Average</span>
                    <span className="text-lg font-bold text-foreground">8.86</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <BrainCircuit className="mr-2 h-5 w-5 text-primary" /> Current Focus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Artificial Intelligence", icon: <BrainCircuit className="h-4 w-4 text-primary" /> },
              { title: "Machine Learning", icon: <Database className="h-4 w-4 text-primary" /> },
              { title: "Generative AI", icon: <BrainCircuit className="h-4 w-4 text-primary" /> },
              { title: "Software Engineering", icon: <Code2 className="h-4 w-4 text-primary" /> },
              { title: "Cloud Computing", icon: <Cloud className="h-4 w-4 text-primary" /> },
            ].map((focus, i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      {focus.icon}
                    </div>
                    <span className="font-medium text-sm text-foreground">{focus.title}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
