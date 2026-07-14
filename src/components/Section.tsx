import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
}

export default function Section({ id, title, subtitle, children, className, fullHeight }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        fullHeight && "min-h-screen flex items-center",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center md:text-left"
          >
            {title && <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
