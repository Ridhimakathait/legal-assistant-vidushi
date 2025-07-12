"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, Scale, Shield } from "lucide-react"
import { useState } from "react"

const lawCategories = [
  {
    id: "ipc",
    title: "Indian Penal Code (IPC)",
    description: "Criminal laws and offenses",
    sections: 511,
    icon: Scale,
    color: "bg-red-100 text-red-700",
  },
  {
    id: "crpc",
    title: "Code of Criminal Procedure (CrPC)",
    description: "Criminal procedure and investigation",
    sections: 484,
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "domestic-violence",
    title: "Domestic Violence Act",
    description: "Protection from domestic violence",
    sections: 37,
    icon: Shield,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "posh",
    title: "POSH Act",
    description: "Prevention of Sexual Harassment at Workplace",
    sections: 28,
    icon: Shield,
    color: "bg-green-100 text-green-700",
  },
  {
    id: "dowry",
    title: "Dowry Prohibition Act",
    description: "Prevention of dowry-related crimes",
    sections: 8,
    icon: Scale,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "cyber",
    title: "IT Act (Cyber Laws)",
    description: "Information technology and cyber crimes",
    sections: 124,
    icon: BookOpen,
    color: "bg-teal-100 text-teal-700",
  },
]

const sampleSections = [
  {
    id: "ipc-302",
    law: "IPC",
    section: "302",
    title: "Murder",
    description:
      "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
    category: "Criminal Offenses",
  },
  {
    id: "ipc-376",
    law: "IPC",
    section: "376",
    title: "Rape",
    description:
      "Whoever commits rape shall be punished with rigorous imprisonment for a term not less than ten years.",
    category: "Sexual Offenses",
  },
  {
    id: "dv-3",
    law: "Domestic Violence Act",
    section: "3",
    title: "Definition of domestic violence",
    description: "Any act, omission or commission or conduct of the respondent shall constitute domestic violence.",
    category: "Domestic Violence",
  },
]

export default function LawsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Database</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive Indian legal sections, acts, and regulations
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search laws, sections, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Law Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{category.sections} sections</Badge>
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Explore Sections
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Sample Sections */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Sections</h2>
          <div className="space-y-4">
            {sampleSections.map((section) => (
              <Card key={section.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{section.law}</Badge>
                        <Badge variant="secondary">Section {section.section}</Badge>
                        <Badge className="bg-gray-100 text-gray-700">{section.category}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{section.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Read Full Section
                    </Button>
                    <Button variant="ghost" size="sm">
                      Related Cases
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
