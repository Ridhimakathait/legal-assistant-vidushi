import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Scale, Heart, Briefcase, Home, Phone } from "lucide-react"

const rightsCategories = [
  {
    id: "constitutional",
    title: "Constitutional Rights",
    description: "Fundamental rights guaranteed by the Constitution",
    icon: Scale,
    color: "bg-blue-100 text-blue-700",
    rights: [
      "Right to Equality (Article 14)",
      "Right against Discrimination (Article 15)",
      "Right to Life and Liberty (Article 21)",
      "Right to Education (Article 21A)",
    ],
  },
  {
    id: "workplace",
    title: "Workplace Rights",
    description: "Protection and rights in professional environment",
    icon: Briefcase,
    color: "bg-green-100 text-green-700",
    rights: [
      "Equal pay for equal work",
      "Protection from sexual harassment (POSH Act)",
      "Maternity benefits (26 weeks paid leave)",
      "Safe working conditions",
    ],
  },
  {
    id: "domestic",
    title: "Domestic Rights",
    description: "Protection within family and domestic sphere",
    icon: Home,
    color: "bg-purple-100 text-purple-700",
    rights: ["Protection from domestic violence", "Right to residence", "Maintenance rights", "Child custody rights"],
  },
  {
    id: "safety",
    title: "Safety & Protection",
    description: "Laws ensuring women's safety and security",
    icon: Shield,
    color: "bg-red-100 text-red-700",
    rights: [
      "Protection from dowry harassment",
      "Protection from acid attacks",
      "Protection from stalking",
      "Right to file Zero FIR",
    ],
  },
]

const importantLaws = [
  {
    title: "Domestic Violence Act 2005",
    description:
      "Comprehensive protection from domestic abuse including physical, sexual, verbal, emotional and economic violence.",
    keyProvisions: ["Protection Orders", "Residence Orders", "Monetary Relief", "Custody Orders"],
  },
  {
    title: "POSH Act 2013",
    description: "Prevention of Sexual Harassment at Workplace Act ensuring safe working environment for women.",
    keyProvisions: ["Internal Complaints Committee", "90-day inquiry period", "Interim relief", "Employer liability"],
  },
  {
    title: "Dowry Prohibition Act 1961",
    description: "Prohibits giving, taking or demanding dowry in marriage.",
    keyProvisions: ["Punishment up to 5 years", "Fine up to ₹15,000", "Dowry death provisions", "Burden of proof"],
  },
  {
    title: "Maternity Benefit Act 2017",
    description: "Provides maternity benefits to women employees in organized sector.",
    keyProvisions: ["26 weeks paid leave", "Work from home option", "Crèche facilities", "Nursing breaks"],
  },
]

const emergencyContacts = [
  { name: "Women Helpline", number: "1091", description: "24x7 helpline for women in distress" },
  { name: "Domestic Violence Helpline", number: "181", description: "Support for domestic violence victims" },
  { name: "Police Emergency", number: "100", description: "Immediate police assistance" },
  { name: "National Commission for Women", number: "011-26942369", description: "NCW helpline for women's rights" },
]

export default function WomensRightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Women's Legal Rights in India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to legal rights, protections, and remedies available to women under Indian law
          </p>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <Phone className="h-6 w-6" />
              Emergency Helplines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                  <div className="font-semibold text-gray-800">{contact.name}</div>
                  <div className="text-sm text-gray-600">{contact.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rights Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories of Women's Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rightsCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.rights.map((right, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{right}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Important Laws */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Laws Protecting Women</h2>
          <div className="space-y-6">
            {importantLaws.map((law, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{law.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{law.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Provisions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {law.keyProvisions.map((provision, idx) => (
                        <Badge key={idx} variant="secondary">
                          {provision}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Get immediate assistance and guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Contact Support</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Legal Consultation</CardTitle>
              <CardDescription>Connect with legal experts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                Find Lawyers
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>File Complaint</CardTitle>
              <CardDescription>Step-by-step complaint guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                <a href="/complaint-steps">Get Guidance</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
