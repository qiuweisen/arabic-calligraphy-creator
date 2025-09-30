/**
 * 分析和用户分段实用函数
 * 用于收入优化和付费转化追踪
 */

// 高价值国家列表（用于付费功能灰度发布）
export const HIGH_VALUE_COUNTRIES = [
  'US', 'CA', 'UK', 'GB', 'DE', 'FR', 'UAE', 'SA', 'MY', 'AU', 'SG', 'NL', 'CH', 'SE', 'NO', 'DK'
];

// 海湾地区国家
export const GULF_COUNTRIES = ['UAE', 'SA', 'QA', 'KW', 'BH', 'OM'];

// Tier1 发达国家
export const TIER1_COUNTRIES = ['US', 'CA', 'UK', 'GB', 'DE', 'FR', 'AU', 'NL', 'CH', 'SE', 'NO', 'DK'];

/**
 * 获取用户国家代码
 */
export function getUserCountry(): string {
  if (typeof window === 'undefined') return 'US';
  
  const userLocale = navigator.language || navigator.languages?.[0] || 'en-US';
  const country = userLocale.split('-')[1] || 'US';
  
  // 处理常见的特殊情况
  if (country === 'GB') return 'UK';
  
  return country.toUpperCase();
}

/**
 * 判断用户是否在高价值国家
 */
export function isHighValueCountry(country?: string): boolean {
  const userCountry = country || getUserCountry();
  return HIGH_VALUE_COUNTRIES.includes(userCountry);
}

/**
 * 获取用户分段
 */
export function getUserSegment(country?: string): 'tier1' | 'gulf' | 'high_value' | 'other' {
  const userCountry = country || getUserCountry();
  
  if (TIER1_COUNTRIES.includes(userCountry)) return 'tier1';
  if (GULF_COUNTRIES.includes(userCountry)) return 'gulf';
  if (HIGH_VALUE_COUNTRIES.includes(userCountry)) return 'high_value';
  
  return 'other';
}

/**
 * 获取设备类型
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

/**
 * 增强的事件追踪函数
 */
export interface AnalyticsEventProps {
  step?: string;
  conversion_type?: string;
  export_type?: string;
  template_id?: string | null;
  plan_type?: 'free' | 'one_time' | 'monthly';
  [key: string]: any;
}

export function trackCalligraphyEvent(eventName: string, props: AnalyticsEventProps = {}) {
  if (typeof window === 'undefined') return;
  
  const enhancedProps = {
    ...props,
    country: getUserCountry(),
    user_segment: getUserSegment(),
    device_type: getDeviceType(),
    timestamp: new Date().toISOString(),
  };
  
  // 调用现有的追踪函数
  if ((window as any).trackCalligraphyEvent) {
    (window as any).trackCalligraphyEvent(eventName, enhancedProps);
  }
}

/**
 * 付费墙相关事件追踪
 */
export function trackPaywallEvent(action: 'view' | 'accept' | 'dismiss', context: {
  feature?: string;
  price?: string;
  plan_type?: 'one_time' | 'monthly';
  export_type?: string;
}) {
  trackCalligraphyEvent(`paywall_${action}`, {
    step: '4_paywall_interaction',
    action,
    ...context
  });
}

/**
 * 检出成功事件追踪
 */
export function trackCheckoutSuccess(orderData: {
  plan_type: 'one_time' | 'monthly';
  amount: number;
  currency: string;
  order_id: string;
  features: string[];
}) {
  trackCalligraphyEvent('checkout_success', {
    step: '5_conversion_complete',
    conversion_type: 'payment',
    ...orderData
  });
}

/**
 * 下载事件追踪（增强版）
 */
export function trackDownloadEvent(format: 'png' | 'svg' | 'pdf', options: {
  font: string;
  fontSize: number;
  hasGradient: boolean;
  hasBackground: string;
  textLength: number;
  isPaid: boolean;
  templateId?: string;
  planType?: 'free' | 'one_time' | 'monthly';
}) {
  trackCalligraphyEvent('Download', {
    step: '5_conversion_download',
    format: format.toUpperCase(),
    conversion_type: `download_${format}`,
    export_type: options.isPaid ? `${format}_pro` : `${format}_free`,
    template_id: options.templateId || null,
    plan_type: options.planType || 'free',
    font: options.font,
    font_size: options.fontSize,
    has_gradient: options.hasGradient,
    has_background: options.hasBackground,
    text_length: options.textLength
  });
}
