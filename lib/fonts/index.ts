import type { FontDetails } from './types';

export type { FontDetails, FontFeature, UseCase, TechnicalDetail, TextExample } from './types';

/**
 * 动态加载字体详情数据
 * @param slug 字体slug
 * @returns Promise<FontDetails | null>
 */
export async function getFontDetails(slug: string): Promise<FontDetails | null> {
  try {
    const fontModule = await import(`./${slug}`);
    return fontModule.default;
  } catch (error) {
    console.error(`Failed to load font details for ${slug}:`, error);
    return null;
  }
}

/**
 * 支持的字体列表
 */
export const SUPPORTED_FONTS = [
  'amiri', 'cairo', 'reem-kufi', 'jomhuria', 'scheherazade', 'tajawal',
  'aref-ruqaa', 'rakkas', 'noto-naskh-arabic', 'mada', 'mirza', 'lemonada',
  'el-messiri', 'harmattan', 'lateef', 'markazi-text', 'marhey'
];

/**
 * 检查字体是否受支持
 */
export function isFontSupported(slug: string): boolean {
  return SUPPORTED_FONTS.includes(slug);
}
