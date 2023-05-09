import { CheckIcon, ShareIcon } from '@rentling/fr-shared';
import { useState } from 'react';

interface shareProps {
  url: string;
}
export const ShareModal = ({ url }: shareProps) => {
  const [isShare, setIsShare] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(url);
    setIsShare(true);
    setTimeout(() => {
      setIsShare(false);
    }, 2000);
  };

  return (
    <div>
      {isShare ? (
        <CheckIcon />
      ) : (
        <div onClick={handleShare}>
          <ShareIcon />
        </div>
      )}
    </div>
  );
};
