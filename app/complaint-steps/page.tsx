import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, AlertCircle, Phone, Globe, Building, Shield } from "lucide-react"

const complaintTypes = [
  {
    id: "fir",
    title: "Filing an FIR",
    description: "First Information Report for criminal offenses",
    icon: FileText,
    urgency: "High",
    color: "bg-red-100 text-red-700",
  },
  {
    id: "cyber",
    title: "Cyber Crime Complaint",
    description: "Online fraud, hacking, cyberbullying",
    icon: Globe,
    urgency: "High",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "domestic-violence",
    title: "Domestic Violence",
    description: "Protection from domestic abuse",
    icon: Shield,
    urgency: "High",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "consumer",
    title: "Consumer Complaint",
    description: "Product/service related grievances",
    icon: Building,
    urgency: "Medium",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "harassment",
    title: "Workplace Harassment",
    description: "Sexual harassment at workplace",
    icon: AlertCircle,
    urgency: "High",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "police",
    title: "Police Complaint",
    description: "Against police misconduct",
    icon: Phone,
    urgency: "Medium",
    color: "bg-teal-100 text-teal-700",
  },
]

const firSteps = [
  {
    step: 1,
    title: "Immediate Action",
    content:
      "If it's an emergency, call 100 (Police) or 112 (Emergency). Preserve evidence and note down details immediately.",
  },
  {
    step: 2,
    title: "Visit Police Station",
    content:
      "Go to the nearest police station in whose jurisdiction the crime occurred. Carry identification documents.",
  },
  {
    step: 3,
    title: "Provide Written Complaint",
    content:
      "Submit a written complaint with all details: date, time, place, nature of offense, and names of accused if known.",
  },
  {
    step: 4,
    title: "FIR Registration",
    content: "Police must register FIR for cognizable offenses. They cannot refuse to register FIR for serious crimes.",
  },
  {
    step: 5,
    title: "Get FIR Copy",
    content: "Obtain a copy of the FIR with FIR number. This is your legal right and free of cost.",
  },
  {
    step: 6,
    title: "Follow Up",
    content:
      "Stay in touch with investigating officer. Provide additional evidence if available. Cooperate with investigation.",
  },
]

export default function ComplaintStepsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complaint Filing Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step guidance for filing various types of legal complaints
          </p>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">100</div>
                <div className="text-sm text-gray-600">Police</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">112</div>
                <div className="text-sm text-gray-600">Emergency</div>
              </div>
              <div className="text-2xl font-bold text-red-600 text-center">
                <div>1091</div>
                <div className="text-sm text-gray-600">Women Helpline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">1930</div>
                <div className="text-sm text-gray-600">Cyber Crime</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complaint Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Complaints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaintTypes.map((type) => {
              const IconComponent = type.icon
              return (
                <Card key={type.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${type.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant={type.urgency === "High" ? "destructive" : "secondary"}>
                        {type.urgency} Priority
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Steps
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Detailed FIR Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to File an FIR - Detailed Steps</h2>
          <div className="space-y-4">
            {firSteps.map((step) => (
              <Card key={step.step} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{step.content}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Can police refuse to register an FIR?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No, police cannot refuse to register an FIR for cognizable offenses. If they refuse, you can approach
                the Superintendent of Police or file a complaint with the Magistrate under Section 156(3) of CrPC.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Is there any fee for filing FIR?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No, filing an FIR is completely free. Police cannot charge any fee for registering FIR or providing a
                copy of it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Can I file FIR online?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, many states provide online FIR filing facility for certain types of crimes like theft, lost
                documents, etc. Check your state police website for online services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What if I don't know the exact details of the crime?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Provide whatever information you have. You can always provide additional details later during
                investigation. The key is to report the crime as soon as possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
