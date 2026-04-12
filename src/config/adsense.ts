export const ADSENSE_CLIENT = "ca-pub-2897420441745530";

// Map your internal AdSpace ids to Google AdSense slot ids.
// Filled with dummy IDs to ensure component renders a frame, real ones must be provided in AdSense dashboard
export const AD_SLOT_IDS: Record<string, string> = {
  'header-leaderboard': '1234567890',
  'sidebar-rectangle': '0987654321',
  'in-article': '1122334455',
  'footer-leaderboard': '5544332211'
};

export const DEFAULT_AD_PROPS = {
  format: 'auto',
  fullWidthResponsive: true,
};
