import { type NextRequest, NextResponse } from "next/server"

// Mock legal database
const legalSections = [
  {
    id: "bnss-144",
    law: "Divorce Law",
    section: "144",
    title: "Maintenance for Wife (BNSS)",
    description:
      "Section 144, BNSS (Bharatiya Nagarik Suraksha Sanhita, 2023): Wife can seek maintenance from her husband if she is not financially independent or unable to maintain herself in the same standard of living as she had during her marriage.",
    category: "Divorce and Maintenance",
    keywords: ["divorce", "maintenance", "alimony", "wife", "bnss"],
  },
  {
    id: "hma-24-25",
    law: "Divorce Law",
    section: "24 & 25",
    title: "Maintenance and Alimony (Hindu Marriage Act)",
    description:
      "Hindu Marriage Act, 1955: A Hindu wife can claim maintenance (during divorce proceedings) and permanent alimony under Section 24 and Section 25, respectively.",
    category: "Divorce and Maintenance",
    keywords: ["divorce", "maintenance", "alimony", "hindu marriage act", "permanent alimony"],
  },
  {
    id: "muslim-law-maintenance",
    law: "Divorce Law",
    section: "Personal Law & BNSS",
    title: "Maintenance (Muslim Personal Law)",
    description:
      "Muslim Personal Law (Shariat) Application Act, 1937 + BNSS: Muslim women can claim maintenance under personal laws. Husband is obligated to provide maintenance to the wife during the Iddat period. After this, she can claim maintenance under Section 144 of the BNSS.",
    category: "Divorce and Maintenance",
    keywords: ["divorce", "maintenance", "muslim personal law", "shariat", "iddat", "bnss"],
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
  {
    id: "dowry-3",
    law: "Dowry Prohibition Act",
    section: "3",
    title: "Penalty for giving or taking dowry",
    description:
      "Section 3 of the Dowry Prohibition Act, 1961 penalizes giving or taking dowry with at least 5 years imprisonment and a fine over ₹15,000.",
    category: "Dowry Offenses",
    keywords: ["dowry", "giving dowry", "taking dowry", "penalty", "prohibition"],
  },
  {
    id: "dowry-4",
    law: "Dowry Prohibition Act",
    section: "4",
    title: "Penalty for demanding dowry",
    description:
      "Section 4 punishes direct or indirect dowry demands with 6 months to 2 years imprisonment and fines up to ₹10,000.",
    category: "Dowry Offenses",
    keywords: ["dowry", "demand", "demanding dowry", "penalty"],
  },
  {
    id: "ipc-498A",
    law: "IPC",
    section: "498A",
    title: "Cruelty by husband or relatives",
    description:
      "Section 498A of the Indian Penal Code (IPC) makes it a criminal offense for a husband or his relatives to subject a married woman to cruelty, punishable by up to 3 years imprisonment and a fine.",
    category: "Criminal Offenses",
    keywords: ["dowry", "dowry cruelty", "harassment", "domestic abuse", "husband"],
  },
  {
    id: "ipc-304B",
    law: "IPC",
    section: "304B",
    title: "Dowry Death",
    description:
      "Section 304B of the Indian Penal Code (IPC) defines and punishes dowry death, where a woman's unnatural death occurs within seven years of marriage following cruelty or harassment by her husband or relatives over dowry demands.",
    category: "Criminal Offenses",
    keywords: ["dowry", "dowry death", "death", "unnatural death", "harassment"],
  },
  {
    id: "it-66C",
    law: "IT Act",
    section: "66C",
    title: "Identity Theft",
    description: "Penalizes identity theft, including using another’s password or digital signature.",
    category: "Cyber Crimes",
    keywords: ["identity theft", "password", "digital signature", "cyber", "hacking"],
  },
  {
    id: "it-66E",
    law: "IT Act",
    section: "66E",
    title: "Violation of Privacy (Voyeurism/Revenge Porn)",
    description: "Criminalizes capturing, publishing, or transmitting a woman's private images without consent (voyeurism/revenge porn).",
    category: "Cyber Crimes",
    keywords: ["voyeurism", "revenge porn", "privacy", "private images", "cyber"],
  },
  {
    id: "it-67",
    law: "IT Act",
    section: "67",
    title: "Publishing Obscene Material",
    description: "Prohibits publishing or transmitting obscene material in electronic form.",
    category: "Cyber Crimes",
    keywords: ["obscene", "publishing", "transmitting", "electronic form", "cyber"],
  },
  {
    id: "it-67A",
    law: "IT Act",
    section: "67A",
    title: "Publishing Sexually Explicit Material",
    description: "Prohibits publishing/transmitting material containing sexually explicit acts.",
    category: "Cyber Crimes",
    keywords: ["sexually explicit", "publishing", "transmitting", "cyber"],
  },
  {
    id: "it-67B",
    law: "IT Act",
    section: "67B",
    title: "Child-related Sexual Material",
    description: "Deals with publishing or transmitting child-related sexual material.",
    category: "Cyber Crimes",
    keywords: ["child porn", "child sexual material", "publishing", "cyber"],
  },
  {
    id: "ipc-354C",
    law: "IPC",
    section: "354C",
    title: "Voyeurism",
    description: "Capturing or distributing a woman’s image in a private act.",
    category: "Criminal Offenses",
    keywords: ["voyeurism", "private act", "capturing image", "cyber"],
  },
  {
    id: "ipc-354D",
    law: "IPC",
    section: "354D",
    title: "Stalking",
    description: "Defines stalking as monitoring or contacting a woman online against her expressed wish.",
    category: "Criminal Offenses",
    keywords: ["stalking", "monitoring", "online stalking", "cyber stalking", "cyber"],
  },
  {
    id: "ipc-509",
    law: "IPC",
    section: "509",
    title: "Insulting Modesty of a Woman",
    description: "Addresses actions intended to insult the modesty of a woman, including cyberbullying and offensive messages.",
    category: "Criminal Offenses",
    keywords: ["modesty", "insult", "cyberbullying", "offensive messages", "cyber"],
  },
  {
    id: "bnss-arrest",
    law: "BNSS",
    section: "35-38",
    title: "Protection during Arrest",
    description: "Existing safeguards for women are retained, such as the prohibition of arrest between sunset and sunrise, except in extraordinary circumstances requiring a female officer.",
    category: "Arrest & Investigation",
    keywords: ["arrest", "sunset", "sunrise", "female officer", "protection", "women"],
  },
  {
    id: "bnss-statements",
    law: "BNSS",
    section: "160",
    title: "Recording Statements",
    description: "Women cannot be summoned to police stations for questioning; statements must be recorded at their residence, often by a woman magistrate.",
    category: "Arrest & Investigation",
    keywords: ["statements", "police station", "questioning", "residence", "magistrate", "women"],
  },
  {
    id: "bnss-videography",
    law: "BNSS",
    section: "Search & Seizure",
    title: "Mandatory Videography",
    description: "Searches and arrests, particularly in cases of sexual offences, require videography to ensure transparency.",
    category: "Arrest & Investigation",
    keywords: ["videography", "searches", "arrests", "sexual offences", "transparency"],
  },
  {
    id: "bnss-investigation",
    law: "BNSS",
    section: "173",
    title: "Speedy Investigation",
    description: "Mandates immediate FIR registration and specific timelines for investigations, particularly in crimes against women.",
    category: "Arrest & Investigation",
    keywords: ["speedy investigation", "fir", "timelines", "crimes against women"],
  }
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
