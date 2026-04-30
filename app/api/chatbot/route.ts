import { type NextRequest, NextResponse } from "next/server"

interface ChatMessage {
  message: string
  context?: string
}

// Mock legal knowledge base
const legalResponses = {
  dowry: "If any person demands, directly or indirectly, from the parents or other relatives or guardian of a bride or bridegroom, as the case may be, any dowry, he shall be punishable with imprisonment for a term which shall not be less than six months, but which may extend to two years and with fine which may extend to ten thousand rupees",

  "domestic violence": "Under the Domestic Violence Act 2005, you can file a complaint with the Magistrate or approach the Protection Officer. You can get protection orders, residence orders, monetary relief, and custody orders.",

  fir: "To file an FIR: 1) Visit the nearest police station, 2) Provide written complaint with details, 3) Police must register FIR for cognizable offenses, 4) Get a copy of FIR.",

  harassment: "Under POSH Act 2013, every workplace must have Internal Complaints Committee (ICC). You can file complaint within 3 months of incident.",

  divorce: "Grounds for divorce under Hindu Marriage Act include adultery, cruelty, desertion for 2+ years, conversion to another religion, mental disorder, communicable disease.",
  bail: "Bailable offenses allow release on bail as a matter of right. Non-bailable offenses require court's discretion. Bail can be denied if accused may flee or tamper with evidence.",
  pornography: "Under Section 67 of the IT Act, 2000, publishing or transmitting obscene material in electronic form is punishable with imprisonment up to 3 years and fine up to 5 lakh rupees on first conviction. If it involves children (child pornography), it falls under Section 67B of the IT Act and the POCSO Act, with much stricter penalties.",
  cyberbullying: "Cyberbullying can be addressed under various sections of the IT Act and IPC. Section 67 of the IT Act penalizes transmitting obscene material. If it involves a woman, Section 354D IPC (Cyber Stalking) or Section 509 IPC (Insulting modesty of a woman) can be applied.",
  "video leak": "If your private photos or videos are leaked or misused without consent, this is a severe crime under Section 66E of the IT Act (violation of privacy), punishable with up to 3 years imprisonment. If the content is morphed or obscene, Section 67 of the IT Act also applies. You should immediately report this to the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call 1930. Do not delete any evidence.",
  "photo leak": "If your private photos or videos are leaked or misused without consent, this is a severe crime under Section 66E of the IT Act (violation of privacy), punishable with up to 3 years imprisonment. If the content is morphed or obscene, Section 67 of the IT Act also applies. You should immediately report this to the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call 1930. Do not delete any evidence.",
  "morphed": "Morphed photos or deepfakes fall under Section 66E (violation of privacy), Section 66D (cheating by personation), and Section 67 (obscene material) of the IT Act. You can file a complaint at cybercrime.gov.in. Platforms are legally bound under IT Rules to remove such non-consensual imagery within 24 hours of receiving a complaint.",
  "deepfake": "Morphed photos or deepfakes fall under Section 66E (violation of privacy), Section 66D (cheating by personation), and Section 67 (obscene material) of the IT Act. You can file a complaint at cybercrime.gov.in. Platforms are legally bound under IT Rules to remove such non-consensual imagery within 24 hours of receiving a complaint.",
  "online fraud": "Online financial fraud, phishing, or OTP scams are punishable under Section 66D of the IT Act (cheating by personation using computer resource) and Section 420 of the IPC (cheating). If you lose money, call the cyber fraud helpline 1930 immediately or register a complaint at cybercrime.gov.in to freeze the transaction.",
  "phishing": "Online financial fraud, phishing, or OTP scams are punishable under Section 66D of the IT Act (cheating by personation using computer resource) and Section 420 of the IPC (cheating). If you lose money, call the cyber fraud helpline 1930 immediately or register a complaint at cybercrime.gov.in to freeze the transaction.",
  "online harassment": "Under Section 354D of the IPC, cyber stalking (monitoring a person's use of internet/email/social media) is a punishable offense. Additionally, Section 67 of the IT Act and Section 503 IPC (criminal intimidation) may apply. You can report this to the nearest cyber cell or the national cyber crime portal.",
  "hacking": "Hacking or unauthorized access to your computer, phone, or online accounts is an offense under Section 43 and Section 66 of the IT Act. This is punishable with imprisonment up to 3 years or a fine up to 5 lakh rupees. Secure your accounts immediately and report the incident.",
  "identity theft": "Identity theft, such as someone creating a fake social media profile in your name or using your electronic signature, is punishable under Section 66C of the IT Act with imprisonment up to 3 years and a fine up to 1 lakh rupees.",
  "fake profile": "Identity theft, such as someone creating a fake social media profile in your name or using your electronic signature, is punishable under Section 66C of the IT Act with imprisonment up to 3 years and a fine up to 1 lakh rupees.",
  rape: "Rape is a serious offence under the Indian Penal Code (IPC). Section 375 IPC defines rape as any sexual intercourse by a man with a woman under circumstances falling under any of the descriptions mentioned therein. The punishment for rape is imprisonment of either description for a term which shall not be less than ten years but which may extend to imprisonment for life, and shall also be liable to fine. However, if the rape is committed by a person in authority or against a minor or under aggravating circumstances, the punishment may be more severe.",
  "acid attack": "Under Section 326A and 326B of the IPC, causing or attempting to cause grievous hurt by throwing acid is a non-bailable offense. The minimum punishment is 10 years imprisonment, which can extend to life, along with a fine to cover the victim's medical expenses.",
  "voyeurism": "Under Section 354C of the IPC, capturing or sharing images of a woman engaging in a private act without her consent (such as hidden cameras in trial rooms or bathrooms) is a criminal offense punishable by 1 to 3 years of imprisonment on first conviction.",
  "hidden camera": "Under Section 354C of the IPC, capturing or sharing images of a woman engaging in a private act without her consent (such as hidden cameras in trial rooms or bathrooms) is a criminal offense punishable by 1 to 3 years of imprisonment on first conviction.",
  stalking: "Physical or online stalking (following a woman or contacting her repeatedly despite clear disinterest) is punishable under Section 354D of the IPC. The first offense is bailable and carries a penalty of up to 3 years imprisonment.",
  molestation: "Using criminal force against a woman with the intent to outrage her modesty is punishable under Section 354 of the IPC with imprisonment ranging from 1 to 5 years. This includes groping or unwanted physical contact.",
  "eve teasing": "Sexual harassment, including passing lewd comments, catcalling, or showing pornography against a woman's will, is punishable under Section 354A of the IPC with imprisonment up to 3 years.",
  "cruelty by husband": "Under Section 498A of the IPC, if a husband or his relatives subject a woman to physical or mental cruelty (often related to dowry demands), they can be punished with imprisonment for up to 3 years. This is a cognizable and non-bailable offense.",
  "child marriage": "Under the Prohibition of Child Marriage Act, 2006, arranging or performing a marriage where the girl is below 18 years or the boy is below 21 years is a punishable offense. You can report this to the Child Helpline (1098) or local police.",
  trafficking: "Human trafficking, especially for commercial sexual exploitation, is a severe crime under Section 370 of the IPC and the Immoral Traffic (Prevention) Act. It carries rigorous imprisonment up to 10 years or even life, depending on the severity.",
}

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Check for keywords in the message
  for (const [keyword, response] of Object.entries(legalResponses)) {
    const keywordParts = keyword.toLowerCase().split(" ")
    // Check if every word in the keyword exists in the user's message
    const isMatch = keywordParts.every(part => lowerMessage.includes(part))

    if (isMatch) {
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
