"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, Scale, Shield, XCircle } from "lucide-react"
import { useState, useRef } from "react"

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

const allSections = [

  {
    id: "ipc-376",
    categoryId: "ipc",
    law: "IPC",
    section: "376",
    title: "Rape",
    description: "Whoever commits rape shall be punished with rigorous imprisonment for a term not less than ten years.",
    category: "Sexual Offenses",
  },
  {
    id: "crpc-154",
    categoryId: "crpc",
    law: "CrPC",
    section: "154",
    title: "Information in cognizable cases (FIR)",
    description: "Every information relating to the commission of a cognizable offence, if given orally to an officer in charge of a police station, shall be reduced to writing by him or under his direction.",
    category: "Criminal Procedure",
  },
  {
    id: "dv-3",
    categoryId: "domestic-violence",
    law: "Domestic Violence Act",
    section: "3",
    title: "Definition of domestic violence",
    description: "Any act, omission or commission or conduct of the respondent shall constitute domestic violence.",
    category: "Domestic Violence",
  },
  {
    id: "posh-9",
    categoryId: "posh",
    law: "POSH Act",
    section: "9",
    title: "Complaint of sexual harassment",
    description: "Any aggrieved woman may make, in writing, a complaint of sexual harassment at workplace to the Internal Committee within a period of three months from the date of incident.",
    category: "Workplace Harassment",
  },
  {
    id: "dowry-3",
    categoryId: "dowry",
    law: "Dowry Prohibition Act",
    section: "3",
    title: "Penalty for giving or taking dowry",
    description: "If any person gives or takes or abets the giving or taking of dowry, they shall be punishable with imprisonment for a term which shall not be less than five years.",
    category: "Dowry",
  },
  {
    id: "cyber-66",
    categoryId: "cyber",
    law: "IT Act",
    section: "66",
    title: "Computer related offences",
    description: "If any person, dishonestly or fraudulently, does any act referred to in section 43, he shall be punishable with imprisonment for a term which may extend to three years or with fine.",
    category: "Cyber Crimes",
  }
]

export default function LawsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null) // Toggle off if clicked again
    } else {
      setSelectedCategory(categoryId)
      setSearchTerm("") // Clear search when picking a new category directly
      setTimeout(() => {
        sectionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  const filteredSections = allSections.filter((section) => {
    // 1. Filter by category
    if (selectedCategory && section.categoryId !== selectedCategory) return false

    // 2. Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase()
      return (
        section.title.toLowerCase().includes(lowerSearch) ||
        section.description.toLowerCase().includes(lowerSearch) ||
        section.law.toLowerCase().includes(lowerSearch) ||
        section.section.toLowerCase().includes(lowerSearch) ||
        section.category.toLowerCase().includes(lowerSearch)
      )
    }
    return true
  })

  // Dynamic heading for the sections
  const getSectionTitle = () => {
    if (selectedCategory) {
      return lawCategories.find((c) => c.id === selectedCategory)?.title + " Sections"
    }
    return searchTerm ? "Search Results" : "Popular Sections"
  }

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
              onChange={(e) => {
                setSearchTerm(e.target.value)
                if (e.target.value && selectedCategory) {
                  setSelectedCategory(null) // Clear category restrict if they start broad searching
                }
              }}
              className="pl-10 py-3 text-lg"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-transparent"
                onClick={() => setSearchTerm("")}
              >
                <XCircle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </Button>
            )}
          </div>
        </div>

        {/* Law Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Legal Categories</h2>
            {selectedCategory && (
              <Button variant="ghost" className="text-pink-600 hover:text-pink-700" onClick={() => setSelectedCategory(null)}>
                Clear Selection
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawCategories.map((category) => {
              const IconComponent = category.icon
              const isActive = selectedCategory === category.id
              return (
                <Card
                  key={category.id}
                  className={`hover:shadow-lg transition-all cursor-pointer ${isActive ? 'ring-2 ring-pink-500 border-pink-500 bg-pink-50/10' : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant={isActive ? "default" : "secondary"} className={isActive ? 'bg-pink-100 text-pink-700 hover:bg-pink-100 border-pink-200' : ''}>
                        {category.sections} sections
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant={isActive ? "default" : "outline"}
                      className={`w-full ${isActive ? 'bg-pink-600 hover:bg-pink-700' : 'bg-transparent text-gray-600 hover:text-pink-600 border-gray-300'}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCategoryClick(category.id)
                      }}
                    >
                      {isActive ? "Exploring Sections" : "Explore Sections"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Sections View */}
        <div className="scroll-mt-20" ref={sectionsRef}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{getSectionTitle()}</h2>

          {filteredSections.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No sections found</h3>
              <p className="text-gray-500">We couldn't find any legal sections matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory(null); }} className="mt-4" variant="outline">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSections.map((section) => (
                <Card key={section.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
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
          )}
        </div>
      </div>
    </div>
  )
}
