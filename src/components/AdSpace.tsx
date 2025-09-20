import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AdSpace as AdSpaceType } from '@/types/wordpress';
import { ADSENSE_CLIENT, AD_SLOT_IDS, DEFAULT_AD_PROPS } from '@/config/adsense';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface AdSpaceProps {
  adSpace: AdSpaceType;
  className?: string;
}

const AdSpace = ({ adSpace, className }: AdSpaceProps) => {
  const slotId = AD_SLOT_IDS[adSpace.id];

  useEffect(() => {
    if (!adSpace.isActive || !slotId) return;

    const timeoutId = window.setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.warn('AdSense rendering failed', error);
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [adSpace.isActive, slotId]);

  if (!adSpace.isActive || !slotId) return null;

  const getSizeClasses = (size: string) => {
    switch (size) {
      case '728x90':
        return 'h-[90px] w-full max-w-[728px]';
      case '300x250':
        return 'h-[250px] w-[300px]';
      case '336x280':
        return 'h-[280px] w-[336px]';
      case '970x250':
        return 'h-[250px] w-full max-w-[970px]';
      case 'responsive':
        return 'w-full';
      default:
        return 'w-full';
    }
  };

  return (
    <div className={cn('w-full flex justify-center', className)}>
      <ins
        className={cn('adsbygoogle block', getSizeClasses(adSpace.size))}
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format={DEFAULT_AD_PROPS.format}
        data-full-width-responsive={DEFAULT_AD_PROPS.fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdSpace;
