import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 获取站点的基础URL，支持不同环境
 * @returns 完整的站点URL（包含协议和域名）
 */
export function getSiteUrl(): string {
  // 在服务端，使用环境变量
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://arabic-calligraphy-generator.com'
  }
  
  // 在客户端，使用当前域名
  return `${window.location.protocol}//${window.location.host}`
}

/**
 * 生成完整的URL
 * @param path 相对路径（以/开头）
 * @returns 完整的URL
 */
export function getFullUrl(path: string): string {
  const baseUrl = getSiteUrl()
  return `${baseUrl}${path}`
}
