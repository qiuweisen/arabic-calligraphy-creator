import Link from "next/link"
import { FOOTER_DATA } from "@/lib/shared-styles"

export function StaticFooter() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 font-bold text-lg">
                {FOOTER_DATA.logo.icon}
              </div>
              <span className="font-bold text-amber-100">{FOOTER_DATA.logo.text}</span>
            </div>
            <p className="text-amber-200 mb-4 text-sm">
              {FOOTER_DATA.description}
            </p>
          </div>
          
          {FOOTER_DATA.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-amber-100 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-amber-200 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            {FOOTER_DATA.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
