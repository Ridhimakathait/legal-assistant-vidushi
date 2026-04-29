"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, Scale, Shield, XCircle } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Section {
  id: string
  law: string
  section: string
  title: string
  description: string
  category: string
  keywords?: string[]
}

const lawCategories = [
  {
    id: "divorce",
    title: "Divorce Laws in India",
    description: "Maintenance and alimony rights",
    sections: 3,
    icon: Scale,
    color: "bg-red-100 text-red-700",
    lawMatch: "Divorce Law",
  },
  {
    id: "bnss",
    title: "Bharatiya Nagarik Suraksha Sanhita (BNSS)",
    description: "Criminal procedure and investigation",
    sections: 531,
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
    lawMatch: "BNSS",
  },
  {
    id: "domestic-violence",
    title: "Domestic Violence Act",
    description: "Protection from domestic violence",
    sections: 37,
    icon: Shield,
    color: "bg-purple-100 text-purple-700",
    lawMatch: "Domestic Violence Act",
  },
  {
    id: "posh",
    title: "POSH Act",
    description: "Prevention of Sexual Harassment at Workplace",
    sections: 28,
    icon: Shield,
    color: "bg-green-100 text-green-700",
    lawMatch: "POSH Act",
  },
  {
    id: "dowry",
    title: "Dowry Prohibition Act",
    description: "Prevention of dowry-related crimes",
    sections: 8,
    icon: Scale,
    color: "bg-orange-100 text-orange-700",
    lawMatch: "Dowry Prohibition Act",
  },
  {
    id: "cyber",
    title: "IT Act (Cyber Laws)",
    description: "Information technology and cyber crimes",
    sections: 124,
    icon: BookOpen,
    color: "bg-teal-100 text-teal-700",
    lawMatch: "IT Act",
  },
]

export default function LawsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [allSections, setAllSections] = useState<Section[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchLaws = async () => {
      try {
        const response = await fetch("/api/laws")
        if (response.ok) {
          const data = await response.json()
          setAllSections(data.sections || [])
        }
      } catch (error) {
        console.error("Failed to fetch laws:", error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchLaws()
  }, [])

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
    if (selectedCategory) {
      const categoryData = lawCategories.find(c => c.id === selectedCategory)
      if (categoryData) {
        // Special case for Dowry to include IPC sections related to dowry
        if (categoryData.id === "dowry") {
          const isDowryRelated = 
            section.law === "Dowry Prohibition Act" || 
            section.title.toLowerCase().includes("dowry") || 
            (section.keywords && section.keywords.some(k => k.toLowerCase().includes("dowry")));
          
          if (!isDowryRelated) return false;
        } else if (categoryData.id === "cyber") {
          const isCyberRelated = 
            section.law === "IT Act" || 
            (section.keywords && section.keywords.some(k => k.toLowerCase().includes("cyber")));
            
          if (!isCyberRelated) return false;
        } else if (section.law !== categoryData.lawMatch) {
          return false;
        }
      }
    }

    // 2. Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase()
      return (
        section.title.toLowerCase().includes(lowerSearch) ||
        section.description.toLowerCase().includes(lowerSearch) ||
        section.law.toLowerCase().includes(lowerSearch) ||
        section.section.toLowerCase().includes(lowerSearch) ||
        section.category.toLowerCase().includes(lowerSearch) ||
        (section.keywords && section.keywords.some(k => k.toLowerCase().includes(lowerSearch)))
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

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading legal sections...</p>
            </div>
          ) : filteredSections.length === 0 ? (
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
