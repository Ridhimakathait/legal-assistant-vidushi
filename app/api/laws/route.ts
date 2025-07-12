import { type NextRequest, NextResponse } from "next/server"

// Mock legal database
const legalSections = [
  {
    id: "ipc-302",
    law: "IPC",
    section: "302",
    title: "Murder",
    description:
      "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
    category: "Criminal Offenses",
    keywords: ["murder", "killing", "death", "homicide"],
  },
  {
    id: "ipc-376",
    law: "IPC",
    section: "376",
    title: "Rape",
    description:
      "Whoever commits rape shall be punished with rigorous imprisonment for a term not less than ten years.",
    category: "Sexual Offenses",
    keywords: ["rape", "sexual assault", "sexual offense"],
  },
  {
    id: "ipc-378",
    law: "IPC",
    section: "378",
    title: "Theft",
    description:
      "Whoever intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
    category: "Property Offenses",
    keywords: ["theft", "stealing", "robbery", "property"],
  },
  {
    id: "dv-3",
    law: "Domestic Violence Act",
    section: "3",
    title: "Definition of domestic violence",
    description:
      "Any act, omission or commission or conduct of the respondent shall constitute domestic violence in case it harms or injures or endangers the health, safety, life, limb or well-being.",
    category: "Domestic Violence",
    keywords: ["domestic violence", "abuse", "harassment", "family"],
  },
  {
    id: "posh-2",
    law: "POSH Act",
    section: "2",
    title: "Sexual harassment",
    description:
      "Sexual harassment includes unwelcome sexually determined behavior, physical contact and advances, demand for sexual favors, sexually colored remarks.",
    category: "Workplace Harassment",
    keywords: ["sexual harassment", "workplace", "posh", "harassment"],
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase()
    const category = searchParams.get("category")
    const law = searchParams.get("law")

    let filteredSections = legalSections

    // Filter by search query
    if (query) {
      filteredSections = filteredSections.filter(
        (section) =>
          section.title.toLowerCase().includes(query) ||
          section.description.toLowerCase().includes(query) ||
          section.keywords.some((keyword) => keyword.includes(query)),
      )
    }

    // Filter by category
    if (category) {
      filteredSections = filteredSections.filter((section) =>
        section.category.toLowerCase().includes(category.toLowerCase()),
      )
    }

    // Filter by law
    if (law) {
      filteredSections = filteredSections.filter((section) => section.law.toLowerCase().includes(law.toLowerCase()))
    }

    return NextResponse.json({
      sections: filteredSections,
      total: filteredSections.length,
    })
  } catch (error) {
    console.error("Laws API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
