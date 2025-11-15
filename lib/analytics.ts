/**
 * Analytics 工具模块
 * 统一管理落地页转化追踪和事件枚举
 */

// ==================== 枚举定义 ====================

/**
 * 落地页来源枚举
 * 必须与URL参数中的 ?source= 值保持一致
 */
export enum LandingSource {
  AI_GENERATOR = 'ai-generator',
  LOGO_MAKER = 'logo-maker',
  WALLPAPER = 'wallpaper',
  TATTOO = 'tattoo',
  QURAN = 'quran',
  // 预留未来页面
  BUSINESS_CARD = 'business-card',
  SOCIAL_MEDIA = 'social-media',
}

/**
 * CTA按钮位置枚举
 */
export enum CTAPosition {
  HERO = 'hero-cta',
  MID = 'mid-cta',
  BOTTOM = 'bottom-cta',
  SIDEBAR = 'sidebar-cta',
  INLINE = 'inline-cta',
}

/**
 * 书法生成器事件类型
 * 与现有 trackCalligraphyEvent 保持一致
 */
export enum CalligraphyEvent {
  // 落地页相关
  LANDING_VIEW = 'Landing_View',
  LANDING_CONVERSION = 'Landing_Conversion',
  LANDING_CTA_CLICK = 'Landing_CTA_Click',
  
  // 生成器相关 (现有事件)
  TOOL_INITIALIZED = 'Tool_Initialized',
  TEXT_INPUT = 'Text_Input',
  FONT_SELECTED = 'Font_Selected',
  COLOR_CHANGED = 'Color_Changed',
  SIZE_ADJUSTED = 'Size_Adjusted',
  DOWNLOAD = 'Download',
  SHARE = 'Share',
  AD_SLOT_VIEW = 'Ad_Slot_View',
  
  // 预留事件
  TEMPLATE_APPLIED = 'Template_Applied',
  FEEDBACK_SUBMITTED = 'Feedback_Submitted',
}

// ==================== 类型定义 ====================

interface BaseEventProps {
  timestamp?: number;
  locale?: string;
  device?: 'desktop' | 'mobile' | 'tablet';
}

interface LandingConversionProps extends BaseEventProps {
  source: LandingSource;
  position: CTAPosition;
  targetUrl?: string;
}

interface LandingViewProps extends BaseEventProps {
  source: LandingSource;
  referrer?: string;
  scrollDepth?: number;
}

interface GeneratorEventProps extends BaseEventProps {
  fontName?: string;
  textLength?: number;
  colorHex?: string;
  sizeValue?: number;
  fileFormat?: 'png' | 'svg';
  shareMethod?: 'copy' | 'download' | 'social';
}

interface AdSlotEventProps extends BaseEventProps {
  slotId: string;
  format: string;
  page?: string;
  device?: 'desktop' | 'mobile' | 'tablet';
}

// ==================== 核心函数 ====================

/**
 * 追踪落地页转化事件
 * 当用户点击CTA按钮从落地页跳转到生成器时调用
 */
export function trackLandingConversion(
  source: LandingSource,
  position: CTAPosition,
  additionalProps?: Partial<LandingConversionProps>
) {
  const props: LandingConversionProps = {
    source,
    position,
    timestamp: Date.now(),
    ...additionalProps,
  };

  if (typeof window !== 'undefined' && window.trackCalligraphyEvent) {
    window.trackCalligraphyEvent(CalligraphyEvent.LANDING_CONVERSION, props);
    console.log('📊 Landing Conversion tracked:', props);
  } else {
    console.warn('⚠️ trackCalligraphyEvent not available');
  }
}

/**
 * 追踪落地页访问事件
 * 在落地页加载时自动调用
 */
export function trackLandingView(
  source: LandingSource,
  additionalProps?: Partial<LandingViewProps>
) {
  const props: LandingViewProps = {
    source,
    referrer: typeof document !== 'undefined' ? document.referrer : undefined,
    timestamp: Date.now(),
    ...additionalProps,
  };

  if (typeof window !== 'undefined' && window.trackCalligraphyEvent) {
    window.trackCalligraphyEvent(CalligraphyEvent.LANDING_VIEW, props);
    console.log('📊 Landing View tracked:', props);
  }
}

/**
 * 追踪CTA按钮点击(不跳转的情况)
 */
export function trackCTAClick(
  source: LandingSource,
  position: CTAPosition,
  label: string
) {
  const props = {
    source,
    position,
    label,
    timestamp: Date.now(),
  };

  if (typeof window !== 'undefined' && window.trackCalligraphyEvent) {
    window.trackCalligraphyEvent(CalligraphyEvent.LANDING_CTA_CLICK, props);
    console.log('📊 CTA Click tracked:', props);
  }
}

/**
 * 追踪生成器事件(扩展现有功能)
 */
export function trackGeneratorEvent(
  event: CalligraphyEvent,
  props?: GeneratorEventProps
) {
  if (typeof window !== 'undefined' && window.trackCalligraphyEvent) {
    window.trackCalligraphyEvent(event, {
      timestamp: Date.now(),
      ...props,
    });
  }
}

/**
 * 追踪广告位曝光事件
 */
export function trackAdSlotView(props: AdSlotEventProps) {
  if (typeof window !== 'undefined' && window.trackCalligraphyEvent) {
    window.trackCalligraphyEvent(CalligraphyEvent.AD_SLOT_VIEW, {
      timestamp: Date.now(),
      ...props,
    });
  }
}

// ==================== URL参数工具 ====================

/**
 * 从URL中读取landing参数并自动追踪转化
 * 在首页 useEffect 中调用
 */
export function trackLandingFromURL() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get('source') as LandingSource | null;
  const ref = urlParams.get('ref') as CTAPosition | null;

  if (source && ref) {
    trackLandingConversion(source, ref, {
      targetUrl: window.location.pathname,
    });

    // 可选: 清理URL参数(避免重复追踪)
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }
}

/**
 * 生成CTA链接
 */
export function buildCTALink(
  source: LandingSource,
  position: CTAPosition,
  basePath: string = '/'
): string {
  return `${basePath}?source=${source}&ref=${position}`;
}

// ==================== 设备检测 ====================

/**
 * 检测用户设备类型
 */
export function detectDevice(): 'desktop' | 'mobile' | 'tablet' {
  if (typeof window === 'undefined') return 'desktop';

  const userAgent = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  if (/mobile|android|iphone|ipod/.test(userAgent) && width < 768) {
    return 'mobile';
  }

  if (/tablet|ipad/.test(userAgent) || (width >= 768 && width < 1024)) {
    return 'tablet';
  }

  return 'desktop';
}

/**
 * 检测用户语言
 */
export function detectLocale(): string {
  if (typeof window === 'undefined') return 'en';
  return navigator.language.split('-')[0] || 'en';
}

// ==================== 滚动深度追踪 ====================

/**
 * 追踪页面滚动深度
 * 用于衡量内容参与度
 */
export function initScrollDepthTracking(source: LandingSource) {
  if (typeof window === 'undefined') return;

  const depths = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    depths.forEach((depth) => {
      if (scrolled >= depth && !tracked.has(depth)) {
        tracked.add(depth);
        trackCTAClick(source, CTAPosition.INLINE, `Scrolled ${depth}%`);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // 清理函数
  return () => window.removeEventListener('scroll', handleScroll);
}

// ==================== 类型声明 ====================

declare global {
  interface Window {
    trackCalligraphyEvent?: (
      eventName: string,
      props: any
    ) => void;
    plausible?: (...args: any[]) => void;
  }
}

// ==================== 导出工具类 ====================

export const Analytics = {
  // 枚举
  LandingSource,
  CTAPosition,
  CalligraphyEvent,

  // 核心函数
  trackLandingConversion,
  trackLandingView,
  trackCTAClick,
  trackGeneratorEvent,
  trackAdSlotView,

  // URL工具
  trackLandingFromURL,
  buildCTALink,

  // 设备检测
  detectDevice,
  detectLocale,

  // 滚动追踪
  initScrollDepthTracking,
};

export default Analytics;
