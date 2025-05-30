'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Download } from "lucide-react";
import { downloadFont } from "@/app/lib/font-download";
import { useState } from "react";
import { toast } from "sonner";

interface FontCardProps {
  name: string;
  slug: string;
  description: string;
  zipFileName?: string;
  displayName?: string;
  previewText?: string;
}

export function FontCard({ 
  name, 
  slug, 
  description, 
  zipFileName, 
  displayName,
  previewText = "بسم الله الرحمن الرحيم"
}: FontCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!zipFileName || !displayName) return;
    
    setIsDownloading(true);
    try {
      await downloadFont(zipFileName, displayName);
      toast.success('Font downloaded successfully');
    } catch (error) {
      console.error('Download failed:', error);
      toast.error(error instanceof Error ? error.message : 'Download failed, please try again later');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Card className="border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg h-full flex flex-col group">
        <CardContent className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-amber-800 mb-1.5 group-hover:text-amber-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 flex-grow min-h-[40px]">
            {description}
          </p>
          <div 
            className="my-3 p-3 bg-amber-50 border border-amber-100 rounded-md text-center min-h-[80px] flex items-center justify-center"
            style={{ 
              fontFamily: name === "Scheherazade" ? "'Scheherazade New', serif" : (name === "Aref Ruqaa" ? "'Aref Ruqaa', serif" : `'${name}', sans-serif`),
              fontSize: "28px",
              direction: "rtl",
              color: "#8B4513"
            }}
          >
            {previewText}
          </div>
          <div className="flex gap-2 mt-auto">
            {zipFileName && displayName && (
              <Button 
                variant="secondary" 
                size="sm"
                className="flex-1 text-amber-700 bg-amber-100 hover:bg-amber-200 disabled:opacity-50"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <Download className="mr-1 h-4 w-4" />
                {isDownloading ? 'Downloading...' : 'Download'}
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition-colors"
              asChild
            >
              <Link href={`/fonts/${slug}`}>
                View Details <ChevronRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 