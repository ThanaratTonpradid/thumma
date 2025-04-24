import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */} 
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🪷</span>
            <span className="text-xl font-medium text-amber-900">ธรรมะสวัสดี</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-800 hover:text-amber-900 transition-colors">
              หน้าแรก
            </Link>
            <Link href="/about" className="text-amber-800 hover:text-amber-900 transition-colors">
              เกี่ยวกับเรา
            </Link>
            <Link href="/contact" className="text-amber-800 hover:text-amber-900 transition-colors">
              ติดต่อเรา
            </Link>
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              ฟังวิทยุธรรมะ
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-amber-800 hover:text-amber-900">
                  หน้าแรก
                </Link>
                <Link href="/about" className="text-amber-800 hover:text-amber-900">
                  เกี่ยวกับเรา
                </Link>
                <Link href="/contact" className="text-amber-800 hover:text-amber-900">
                  ติดต่อเรา
                </Link>
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                  ฟังวิทยุธรรมะ
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
} 