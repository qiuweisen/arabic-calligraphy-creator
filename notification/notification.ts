// 通知系统占位 - 暂不启用

export async function sendNotification(
  sessionId: string,
  customerId: string,
  userId: string,
  amount: number
): Promise<void> {
  // 暂不实现
  console.log('[Notification] sendNotification called but not enabled');
}
