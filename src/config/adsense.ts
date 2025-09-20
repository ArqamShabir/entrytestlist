export const ADSENSE_CLIENT = "ca-pub-2897420441745530";

// Map your internal AdSpace ids to Google AdSense slot ids.
// Fill these in from your AdSense dashboard and keep the keys in sync with WordPress ACF settings.
export const AD_SLOT_IDS: Record<string, string> = {
  // Example entries:
  // 'header-leaderboard': '1234567890',
  // 'sidebar-rectangle': '0987654321',
};

export const DEFAULT_AD_PROPS = {
  format: 'auto',
  fullWidthResponsive: true,
};
