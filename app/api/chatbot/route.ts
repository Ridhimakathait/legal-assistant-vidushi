import { type NextRequest, NextResponse } from "next/server"

interface ChatMessage {
  message: string
  context?: string
}

// Mock legal knowledge base
const legalResponses = {
  theft:
    "Under IPC Section 378-382, theft is punishable with imprisonment up to 3 years, or fine, or both. The punishment varies based on the value of stolen property and circumstances.",

  "domestic violence":
    "Under the Domestic Violence Act 2005, you can file a complaint with the Magistrate or approach the Protection Officer. You can get protection orders, residence orders, monetary relief, and custody orders.",

  fir: "To file an FIR: 1) Visit the nearest police station, 2) Provide written complaint with details, 3) Police must register FIR for cognizable offenses, 4) Get a copy of FIR.",

  harassment:
    "Under POSH Act 2013, every workplace must have Internal Complaints Committee (ICC). You can file complaint within 3 months of incident.",

  divorce:
    "Grounds for divorce under Hindu Marriage Act include adultery, cruelty, desertion for 2+ years, conversion to another religion, mental disorder, communicable disease.",

  bail: "Bailable offenses allow release on bail as a matter of right. Non-bailable offenses require court's discretion. Bail can be denied if accused may flee or tamper with evidence.",
}

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Check for keywords in the message
  for (const [keyword, response] of Object.entries(legalResponses)) {
    if (lowerMessage.includes(keyword)) {
      return response
    }
  }

  // Default response
  return "I understand your legal question. For specific legal advice, I recommend consulting with a qualified lawyer. However, I can provide general information about Indian laws. Could you please be more specific about which area of law you're interested in?"
}

export async function POST(request: NextRequest) {
  try {
    const { message }: ChatMessage = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = generateResponse(message)

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Chatbot API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
