import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, MessageCircle, FileText, HelpCircle, Download, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-pink-600 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-pink-900">Vidushi</h1>
          </div>
          <p className="text-xl md:text-2xl text-pink-700 mb-8 max-w-3xl mx-auto">
            Your AI-powered legal assistant for understanding Indian laws, filing complaints, and accessing justice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Link href="/chatbot">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask Legal Questions
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-pink-300 text-pink-700 hover:bg-pink-50">
              <Link href="/laws">
                <Scale className="mr-2 h-5 w-5" />
                Explore Laws
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center border-pink-200 bg-pink-50/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
              <p className="text-pink-700">Legal Sections Covered</p>
            </CardContent>
          </Card>
          <Card className="text-center border-rose-200 bg-rose-50/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
              <p className="text-rose-700">AI Assistant Available</p>
            </CardContent>
          </Card>
          <Card className="text-center border-fuchsia-200 bg-fuchsia-50/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-fuchsia-600 mb-2">1000+</div>
              <p className="text-fuchsia-700">Users Helped</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-900">Comprehensive Legal Assistance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow border-pink-200 bg-pink-50/30">
            <CardHeader>
              <Scale className="h-8 w-8 text-pink-600 mb-2" />
              <CardTitle className="text-pink-900">Law Explorer</CardTitle>
              <CardDescription className="text-pink-700">
                Browse IPC, CrPC, and special laws including Domestic Violence Act, POSH, and more
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent border-pink-300 text-pink-700 hover:bg-pink-50">
                <Link href="/laws">Explore Laws</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-rose-200 bg-rose-50/30">
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-rose-600 mb-2" />
              <CardTitle className="text-rose-900">AI Chatbot</CardTitle>
              <CardDescription className="text-rose-700">
                Get instant answers to your legal questions with our intelligent assistant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent border-rose-300 text-rose-700 hover:bg-rose-50">
                <Link href="/chatbot">Start Chat</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-fuchsia-200 bg-fuchsia-50/30">
            <CardHeader>
              <FileText className="h-8 w-8 text-fuchsia-600 mb-2" />
              <CardTitle className="text-fuchsia-900">Complaint Guide</CardTitle>
              <CardDescription className="text-fuchsia-700">
                Step-by-step guidance for filing FIRs, cyber complaints, and other legal procedures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent border-fuchsia-300 text-fuchsia-700 hover:bg-fuchsia-50">
                <Link href="/complaint-steps">Get Guidance</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-pink-200 bg-pink-50/30">
            <CardHeader>
              <HelpCircle className="h-8 w-8 text-pink-600 mb-2" />
              <CardTitle className="text-pink-900">FAQ</CardTitle>
              <CardDescription className="text-pink-700">
                Find answers to commonly asked legal questions, categorized and searchable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent border-pink-300 text-pink-700 hover:bg-pink-50">
                <Link href="/faq">Browse FAQ</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-rose-200 bg-rose-50/30">
            <CardHeader>
              <Download className="h-8 w-8 text-rose-600 mb-2" />
              <CardTitle className="text-rose-900">Legal Forms</CardTitle>
              <CardDescription className="text-rose-700">
                Download templates for complaints, RTI applications, and other legal documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent border-rose-300 text-rose-700 hover:bg-rose-50">
                <Link href="/forms">Download Forms</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-fuchsia-200 bg-fuchsia-50/30">
            <CardHeader>
              <Users className="h-8 w-8 text-fuchsia-600 mb-2" />
              <CardTitle className="text-fuchsia-900">Women's Rights</CardTitle>
              <CardDescription className="text-fuchsia-700">Specialized guidance on women's legal rights and protection laws</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent border-fuchsia-300 text-fuchsia-700 hover:bg-fuchsia-50">
                <Link href="/womens-rights">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Language Support */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-pink-900">Multi-Language Support</h2>
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-pink-100 text-pink-800 border-pink-200">
              English
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-rose-100 text-rose-800 border-rose-200">
              हिंदी
            </Badge>
          </div>
          <p className="text-pink-700 max-w-2xl mx-auto">
            Access legal information and assistance in both English and Hindi to ensure everyone can understand their
            rights and legal options.
          </p>
        </div>
      </section>
    </div>
  )
}
