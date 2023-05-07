import { ShareIcon } from '@rentling/fr-shared';
import { useState } from 'react';
import styles from './ShareModal.module.scss'

interface shareProps {
  url: string;
}
export const ShareModal = ({ url }: shareProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShare = (service: string) => {
    switch (service) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,'_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`,'_blank');
        break;
        case 'email':
            window.location.href = `mailto:?body=${encodeURIComponent(url)}`;
            break;
          case 'copy':
            navigator.clipboard.writeText(url);
            break;
            default:
            break;
    }
    setShowModal(false);
  };

  return (
    <div>
      <div onClick={() => setShowModal(!showModal)}>
        <ShareIcon />
      </div>
      {showModal && (
        <div className={styles.share_modal}>
          <button onClick={()=> handleShare('facebook')}>Share on Facebook</button>
          <button onClick={()=> handleShare('linkedin')}>Share on LinkedIn</button>
          <button onClick={()=> handleShare('email')}>Share via Email</button>
          <button onClick={()=> handleShare('copy')}>Copy Link</button>
        </div>
      )}
    </div>
  );
};
