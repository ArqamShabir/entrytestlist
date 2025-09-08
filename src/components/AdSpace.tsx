import { cn } from '@/lib/utils';
import { AdSpace as AdSpaceType } from '@/types/wordpress';

interface AdSpaceProps {
  adSpace: AdSpaceType;
  className?: string;
}

const AdSpace = ({ adSpace, className }: AdSpaceProps) => {
  if (!adSpace.isActive) return null;

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
        return 'h-auto w-full';
      default:
        return 'h-[250px] w-[300px]';
    }
  };

  return (
    <div
      className={cn(
        'bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm border-2 border-dashed border-border/50 mx-auto',
        getSizeClasses(adSpace.size),
        className
      )}
    >
      <div className="text-center">
        <p className="font-medium">Advertisement</p>
        <p className="text-xs opacity-75">({adSpace.size})</p>
      </div>
    </div>
  );
};

export default AdSpace;