import Link from "next/link"

interface LogoProps {
  className?: string
}

export function SharedLogo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">خط</span>
      </div>
      <span className="font-bold text-xl text-gray-900">Arabic Calligraphy</span>
    </Link>
  )
}
