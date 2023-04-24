import styles from './MoreInfo.module.scss';
import {
  CommentIcon,
  BedIcon,
  BathroomIcon,
  CarIcon,
  SqFeetIcon,
} from '@rentling/fr-shared';

export interface MoreInfoProps {
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  area: string;
  description: string;
  comment: string;
}

export const MoreInfo = ({
  bedrooms,
  bathrooms,
  parking,
  area,
  description,
  comment,
}: MoreInfoProps) => {
  return (
    <section>
      <div className={styles.house_features}>
        <div className={styles.house_feature}>
          <BedIcon />
          <p>{bedrooms}</p>
        </div>
        <div className={styles.house_feature}>
          <BathroomIcon />
          <p>{bathrooms}</p>
        </div>
        <div className={styles.house_feature}>
          <CarIcon />
          <p>
            {parking ? 'with' : 'without'}
            <span>parking</span>
          </p>
        </div>
        <div className={styles.house_feature}>
          <SqFeetIcon />
          <p>
            {area}
            <span>ft²</span>
          </p>
        </div>
      </div>
      {/* feature */}
      <div className={styles.about_house}>
        <h4>About this house:</h4>
        <p>{description}</p>
      </div>
      {/* about */}
      <div className={styles.comments_house}>
        <h4>Your note about this house: </h4>
        <div>
          <p className={styles.text_comment}>{comment}</p>
          <CommentIcon />
        </div>
      </div>
      {/* comments */}
    </section>
  );
};
