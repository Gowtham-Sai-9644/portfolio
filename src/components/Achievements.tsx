import Section from "./Section"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

const stats = [
  { label: "CGPA", value: "8.86" },
  { label: "Projects Built", value: "5+" },
  { label: "Certifications", value: "5+" },
  { label: "Technologies", value: "20+" },
]

export default function Achievements() {
  return (
    <Section id="achievements" className="bg-muted/30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="border-transparent bg-background shadow-sm text-center py-8 hover:shadow-md transition-shadow">
              <CardContent className="p-0 space-y-2">
                <div className="text-4xl md:text-5xl font-bold font-heading text-primary">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
