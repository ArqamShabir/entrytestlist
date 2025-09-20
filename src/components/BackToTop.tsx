import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors z-50"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;

