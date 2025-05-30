export interface FontInfo {
  slug: string;
  displayName: string;
  zipFileName: string; // 所有字体都应该有下载文件
  // Add other font-specific details here if needed for the detail page later
  description?: string; 
  story?: string;
  isDownloadable?: boolean; // 新增字段，表示字体是否可下载
  // Example for other details that might come from FONT_DATA
  // category?: string; 
}

// 这个映射表基于实际的 CDN 文件
export const FONT_SLUG_TO_INFO_MAP: Record<string, FontInfo> = {
  // 所有字体都在 CDN 中存在
  "amiri": { 
    slug: "amiri", 
    displayName: "Amiri", 
    zipFileName: "Amiri.zip"
  },
  "aref-ruqaa": { 
    slug: "aref-ruqaa", 
    displayName: "Aref Ruqaa", 
    zipFileName: "Aref_Ruqaa.zip"
  },
  "cairo": { 
    slug: "cairo", 
    displayName: "Cairo", 
    zipFileName: "Cairo.zip"
  },
  "el-messiri": {
    slug: "el-messiri",
    displayName: "El Messiri",
    zipFileName: "El_Messiri.zip"
  },
  "harmattan": { 
    slug: "harmattan", 
    displayName: "Harmattan", 
    zipFileName: "Harmattan.zip"
  },
  "inter": { 
    slug: "inter", 
    displayName: "Inter", 
    zipFileName: "Inter.zip"
  },
  "jomhuria": { 
    slug: "jomhuria", 
    displayName: "Jomhuria", 
    zipFileName: "Jomhuria.zip"
  },
  "lateef": { 
    slug: "lateef", 
    displayName: "Lateef", 
    zipFileName: "Lateef.zip"
  },
  "lemonada": {
    slug: "lemonada",
    displayName: "Lemonada",
    zipFileName: "Lemonada.zip"
  },
  "mada": { 
    slug: "mada", 
    displayName: "Mada", 
    zipFileName: "Mada.zip"
  },
  "marhey": {
    slug: "marhey",
    displayName: "Marhey",
    zipFileName: "Marhey.zip"
  },
  "markazi-text": {
    slug: "markazi-text",
    displayName: "Markazi Text",
    zipFileName: "Markazi_Text.zip"
  },
  "mirza": { 
    slug: "mirza", 
    displayName: "Mirza", 
    zipFileName: "Mirza.zip"
  },
  "noto-naskh-arabic": { 
    slug: "noto-naskh-arabic", 
    displayName: "Noto Naskh Arabic", 
    zipFileName: "Noto_Naskh_Arabic.zip"
  },
  "rakkas": { 
    slug: "rakkas", 
    displayName: "Rakkas", 
    zipFileName: "Rakkas.zip"
  },
  "reem-kufi": { 
    slug: "reem-kufi", 
    displayName: "Reem Kufi", 
    zipFileName: "Reem_Kufi.zip"
  },
  "scheherazade": { 
    slug: "scheherazade", 
    displayName: "Scheherazade", 
    zipFileName: "Scheherazade_New.zip"
  },
  "tajawal": { 
    slug: "tajawal", 
    displayName: "Tajawal", 
    zipFileName: "Tajawal.zip"
  }
};

// 获取所有字体 slug 的函数
export function getAllFontSlugs(): string[] {
  return Object.keys(FONT_SLUG_TO_INFO_MAP);
}

// 根据 slug 获取字体信息的函数
export function getFontInfoBySlug(slug: string): FontInfo | undefined {
  return FONT_SLUG_TO_INFO_MAP[slug];
} 