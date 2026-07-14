import Section from "./Section"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { FileText, Download, ExternalLink } from "lucide-react"

export default function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="View or download my comprehensive resume for a complete professional history.">
      <Card className="border-border/50 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="bg-muted p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-border/50 flex-1">
              <div className="text-center">
                <FileText className="h-20 w-20 text-primary/50 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2">Resume.pdf</h3>
                <p className="text-muted-foreground text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-4 flex-1">
              <Button size="lg" className="w-full justify-start text-base h-14">
                <Download className="mr-3 h-5 w-5" /> Download PDF
              </Button>
              <Button size="lg" variant="outline" className="w-full justify-start text-base h-14">
                <ExternalLink className="mr-3 h-5 w-5" /> Open Resume
              </Button>
              <div className="pt-4 mt-2 border-t text-sm text-muted-foreground text-center">
                Available for Full-Time Opportunities
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}
