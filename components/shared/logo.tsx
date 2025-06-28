import Link from "next/link"

interface LogoProps {
  className?: string
}

export function SharedLogo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg">
        خط
      </div>
      <span className="font-bold text-amber-800">ArabicCalligraphy</span>
    </Link>
  )
}
