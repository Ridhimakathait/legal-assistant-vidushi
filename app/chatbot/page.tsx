"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Lightbulb } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const suggestedQuestions = [
  "What is the punishment for theft under IPC?",
  "How to file a domestic violence complaint?",
  "What are women's rights in workplace harassment?",
  "How to register an FIR online?",
  "What is the procedure for divorce in India?",
  "Rights of accused person during arrest",
]

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm Vidushi, your legal assistant. I can help you understand Indian laws, legal procedures, and your rights. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("theft") || lowerQuestion.includes("stealing")) {
      return "Under IPC Section 378-382, theft is punishable with imprisonment up to 3 years, or fine, or both. The punishment varies based on the value of stolen property and circumstances. For theft in dwelling house (Section 380), punishment can extend to 7 years."
    }

    if (lowerQuestion.includes("domestic violence") || lowerQuestion.includes("dv")) {
      return "Under the Domestic Violence Act 2005, you can file a complaint with the Magistrate or approach the Protection Officer. You can get protection orders, residence orders, monetary relief, and custody orders. The complaint can be filed by the aggrieved person or on her behalf by relatives, social workers, or organizations."
    }

    if (lowerQuestion.includes("fir") || lowerQuestion.includes("police complaint")) {
      return "To file an FIR: 1) Visit the nearest police station, 2) Provide written complaint with details, 3) Police must register FIR for cognizable offenses, 4) Get a copy of FIR, 5) If police refuses, approach SP/Magistrate. You can also file online FIR in many states for certain offenses."
    }

    if (lowerQuestion.includes("harassment") || lowerQuestion.includes("posh")) {
      return "Under POSH Act 2013, every workplace must have Internal Complaints Committee (ICC). You can file complaint within 3 months of incident. ICC must complete inquiry within 90 days. Employer must provide safe working environment and take action based on ICC recommendations."
    }

    return "I understand your question about legal matters. For specific legal advice, I recommend consulting with a qualified lawyer. However, I can provide general information about Indian laws. Could you please be more specific about which area of law you're interested in - criminal law, civil law, family law, or constitutional law?"
  }

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Assistant Chat</h1>
          <p className="text-xl text-gray-600">Get instant answers to your legal questions</p>
        </div>

        {/* Chat Container */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-blue-600" />
              Vidushi - Legal Assistant
              <Badge variant="secondary" className="ml-auto">
                Online
              </Badge>
            </CardTitle>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === "bot" && <Bot className="h-5 w-5 mt-0.5 text-blue-600" />}
                    {message.sender === "user" && <User className="h-5 w-5 mt-0.5 text-white" />}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask your legal question..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Suggested Questions */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            <h3 className="text-lg font-semibold text-gray-900">Suggested Questions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-left justify-start h-auto p-3 whitespace-normal bg-transparent"
                onClick={() => handleSuggestedQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
