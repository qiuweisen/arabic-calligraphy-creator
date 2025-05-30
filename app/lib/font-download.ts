/**
 * Font download module
 */

/**
 * Download font file
 * @param zipFileName - ZIP file name (e.g., 'Amiri.zip')
 * @param displayName - Display name for the downloaded file
 */
export async function downloadFont(zipFileName: string, displayName: string): Promise<void> {
  try {
    const response = await fetch(`/api/download?fileName=${encodeURIComponent(zipFileName)}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(errorData.error || `Download failed (HTTP ${response.status})`);
    }
    
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/zip')) {
      throw new Error('Invalid file type');
    }

    const blob = await response.blob();
    if (blob.size === 0) {
      throw new Error('File content is empty');
    }

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${displayName}.zip`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('Font download error:', error);
    throw new Error(error instanceof Error ? error.message : 'Download failed, please try again later');
  }
} 