/**
 * Preloads critical resources like images, fonts, and other assets
 * to improve initial load performance
 */
export const preloadCriticalResources = () => {
  // Critical images to preload
  const criticalImages = [
    '/assets/YB.jpg',
    '/assets/kubernetes-project-header.jpg',
    '/assets/linux-devops-header.jpg'
  ];

  // Preload images
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Preconnect to external domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://upload.wikimedia.org'
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}; 