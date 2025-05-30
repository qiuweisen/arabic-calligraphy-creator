'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadFont } from "@/app/lib/font-download";
import { useState } from "react";
import { toast } from "sonner";

interface DownloadButtonProps {
  zipFileName: string;
  displayName: string;
}

export function DownloadButton({ zipFileName, displayName }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    
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
    <Button 
      variant="default"
      size="lg"
      className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50"
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <Download className="mr-2 h-5 w-5" /> {isDownloading ? 'Downloading...' : 'Download Font'}
    </Button>
  );
} 