"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, Scale, Users, FileText, Shield } from "lucide-react"
import { useState } from "react"

const faqCategories = [
  {
    id: "criminal",
    title: "Criminal Law",
    icon: Scale,
    color: "bg-red-100 text-red-700",
    count: 15,
  },
  {
    id: "civil",
    title: "Civil Law",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    count: 12,
  },
  {
    id: "family",
    title: "Family Law",
    icon: Users,
    color: "bg-green-100 text-green-700",
    count: 18,
  },
  {
    id: "womens-rights",
    title: "Women's Rights",
    icon: Shield,
    color: "bg-purple-100 text-purple-700",
    count: 20,
  },
]

const faqs = [
  {
    id: 1,
    category: "criminal",
    question: "What is the difference between bailable and non-bailable offenses?",
    answer:
      "Bailable offenses are those where the accused has a right to bail and can be released on bail as a matter of right. Non-bailable offenses are serious crimes where bail is not a matter of right and is granted at the discretion of the court. Examples of non-bailable offenses include murder, rape, and kidnapping.",
  },
  {
    id: 2,
    category: "criminal",
    question: "Can I withdraw an FIR once filed?",
    answer:
      "You cannot directly withdraw an FIR once filed. However, you can approach the court and request to withdraw the case. For compoundable offenses, you can reach a compromise with the accused. For non-compoundable offenses, the court has discretion to allow withdrawal in the interest of justice.",
  },
  {
    id: 3,
    category: "family",
    question: "What are the grounds for divorce in India?",
    answer:
      "Under Hindu Marriage Act: Adultery, cruelty, desertion for 2+ years, conversion to another religion, mental disorder, communicable disease, renunciation of world. Under Muslim law: Khula, Mubarat, Talaq. Under Christian law: Adultery, cruelty, desertion for 2+ years.",
  },
  {
    id: 4,
    category: "womens-rights",
    question: "What constitutes sexual harassment at workplace?",
    answer:
      "Under POSH Act 2013, sexual harassment includes unwelcome sexually determined behavior like physical contact, demand for sexual favors, sexually colored remarks, showing pornography, or any other unwelcome physical, verbal or non-verbal conduct of sexual nature.",
  },
  {
    id: 5,
    category: "civil",
    question: "What is the limitation period for filing a civil suit?",
    answer:
      "Generally 3 years for most civil suits from the date when the right to sue accrues. For recovery of possession of immovable property: 12 years. For money lending: 3 years. For contracts: 3 years from breach. Specific periods may vary based on the nature of the case.",
  },
  {
    id: 6,
    category: "womens-rights",
    question: "What are the rights of women in domestic violence cases?",
    answer:
      "Under Domestic Violence Act 2005: Right to residence, protection order, monetary relief, custody of children, compensation, medical expenses. Women can approach Protection Officer, police, or directly file complaint with Magistrate. The act covers physical, sexual, verbal, emotional and economic abuse.",
  },
  {
    id: 7,
    category: "criminal",
    question: "What are my rights if arrested by police?",
    answer:
      "Right to know grounds of arrest, right to bail (for bailable offenses), right to legal representation, right to inform family/friends, right to medical examination, right against torture, right to be produced before magistrate within 24 hours, right to remain silent.",
  },
  {
    id: 8,
    category: "family",
    question: "How is child custody decided in divorce cases?",
    answer:
      "Courts consider the best interest of the child as paramount. Factors include: child's age, preference (if mature), financial stability of parents, moral character, ability to provide care, and maintaining child's routine. Generally, children below 7 years stay with mother unless exceptional circumstances exist.",
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common legal questions across different areas of law
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {faqCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedCategory === category.id ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`mx-auto p-3 rounded-lg ${category.color} w-fit`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="secondary">{category.count} questions</Badge>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Clear Filter */}
        {selectedCategory && (
          <div className="mb-6">
            <Badge variant="outline" className="cursor-pointer" onClick={() => setSelectedCategory(null)}>
              Clear filter ✕
            </Badge>
          </div>
        )}

        {/* FAQ List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory
              ? `${faqCategories.find((c) => c.id === selectedCategory)?.title} Questions`
              : "All Questions"}
          </h2>

          {filteredFAQs.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No questions found matching your search.</p>
              </CardContent>
            </Card>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <Card>
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-start gap-3 w-full">
                        <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{faq.question}</h3>
                          <Badge variant="outline" className="text-xs">
                            {faqCategories.find((c) => c.id === faq.category)?.title}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-8">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-blue-900">Still have questions?</CardTitle>
            <CardDescription className="text-blue-700">
              Can't find what you're looking for? Our legal assistant is here to help.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/chatbot"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                Ask Vidushi
              </a>
              <a
                href="mailto:support@vidushi.legal"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
