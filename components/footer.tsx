import Link from "next/link"
import { Scale, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Vidushi</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your AI-powered legal assistant providing comprehensive guidance on Indian laws, legal procedures, and
              access to justice for everyone.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@vidushi.legal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/laws" className="text-gray-300 hover:text-white transition-colors">
                  Browse Laws
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="text-gray-300 hover:text-white transition-colors">
                  Legal Assistant
                </Link>
              </li>
              <li>
                <Link href="/complaint-steps" className="text-gray-300 hover:text-white transition-colors">
                  File Complaint
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/laws?category=criminal" className="text-gray-300 hover:text-white transition-colors">
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link href="/laws?category=civil" className="text-gray-300 hover:text-white transition-colors">
                  Civil Law
                </Link>
              </li>
              <li>
                <Link href="/laws?category=family" className="text-gray-300 hover:text-white transition-colors">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="/womens-rights" className="text-gray-300 hover:text-white transition-colors">
                  Women's Rights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Vidushi Legal Assistant. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
