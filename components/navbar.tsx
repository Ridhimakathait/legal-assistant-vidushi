"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Scale, Menu, MessageCircle, BookOpen, FileText, HelpCircle } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Scale },
  { name: "Laws", href: "/laws", icon: BookOpen },
  { name: "Chatbot", href: "/chatbot", icon: MessageCircle },
  { name: "Complaint Guide", href: "/complaint-steps", icon: FileText },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Vidushi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="flex items-center space-x-2 mb-8">
                    <Scale className="h-8 w-8 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-900">Vidushi</span>
                  </Link>
                  {navigation.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="text-lg">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
