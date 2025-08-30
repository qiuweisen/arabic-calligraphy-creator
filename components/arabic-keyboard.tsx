"use client"

import React, { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ArabicKeyboardProps {
  onKeyPress: (char: string) => void
}

// Arabic keyboard layout
const ARABIC_KEYS = [
  ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"],
  ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"],
  ["ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ"],
]

const ARABIC_SPECIAL_CHARS = ["،", "؛", ":", ".", "؟", "!", " ", "-", "_", "«", "»"]

export const ArabicKeyboard = React.memo(function ArabicKeyboard({ onKeyPress }: ArabicKeyboardProps) {
  const [isShifted, setIsShifted] = useState(false)

  const handleKeyPress = useCallback((char: string) => {
    onKeyPress(char)
  }, [onKeyPress])

  const toggleShift = useCallback(() => {
    setIsShifted(!isShifted)
  }, [isShifted])

  return (
    <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3 w-full transition-all animate-in fade-in">
      <div className="space-y-2">
        {ARABIC_KEYS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.map((key) => (
              <Button
                key={key}
                variant="outline"
                size="sm"
                className={cn(
                  "h-9 min-w-[36px] font-arabic text-base border-amber-200 hover:bg-amber-100/50",
                  isShifted && "font-bold",
                )}
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </Button>
            ))}
          </div>
        ))}
        <div className="flex justify-center gap-1">
          {ARABIC_SPECIAL_CHARS.map((char) => (
            <Button
              key={char}
              variant="outline"
              size="sm"
              className="h-9 min-w-[36px] border-amber-200 hover:bg-amber-100/50"
              onClick={() => handleKeyPress(char)}
            >
              {char === " " ? "Space" : char}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className={cn("h-9 min-w-[60px] border-amber-200 hover:bg-amber-100/50", isShifted && "bg-amber-100")}
            onClick={toggleShift}
          >
            Shift
          </Button>
        </div>
      </div>
      <div className="text-xs text-center mt-2 text-amber-700">
        Click on the characters to insert them into your text
      </div>
    </div>
  )
});
