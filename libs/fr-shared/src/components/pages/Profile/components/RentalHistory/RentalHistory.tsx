import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChooseDropdown,
  TextIcon,
  DateMonthIcon,
  MoreInfoIcon,
  CalenderIcon,
  MoreInfo,
  LessInfoIcon,
  Rating,
} from '@rentling/fr-shared';
import styles from './RentalHistory.module.scss';

export const RentalHistory = ({rentalHistory}) => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [sortSelected, setSortSelected] = useState('Earliest');
  const [isShow, setIsShow] = useState<any>([]);

  useEffect(() => {
    const sortedHistoryByEarliest = selectedUser.history
      .slice()
      .sort((a, b) => {
        return (
          Date.parse(a.rentalPeriod.startDate) -
          Date.parse(b.rentalPeriod.startDate)
        );
      });
    const sortedHistoryByLatest = rentalHistory.slice().sort((a, b) => {
      return (
        Date.parse(b.rentalPeriod.startDate) -
        Date.parse(a.rentalPeriod.startDate)
      );
    });
    const sortedHistory =
      sortSelected === 'Earliest'
        ? sortedHistoryByEarliest
        : sortedHistoryByLatest;
    setSelectedUser((prevState: any) => ({
      ...prevState,
      history: sortedHistory,
    }));
  }, [sortSelected]);

  const handleSort = (sortOption: string) => {
    setSortSelected(sortOption);
  };

  const handleShowMore = (itemIndex: any) => {
    setIsShow((prevState: any) => {
      const newState = [...prevState];
      newState[itemIndex] = !prevState[itemIndex];
      return newState;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <h2>YOUR TRIP HISTORY</h2>
        </div>
        <div className={styles.sort_house}>
          <p>Sortby :</p>
          <ChooseDropdown
            style={undefined}
            label={sortSelected}
            selectedOption={sortSelected}
            options={['Earliest', 'Latest']}
            handleOptionChange={handleSort}
          />
        </div>
      </div>
      <div className={styles.houses}>
        {rentalHistory.map((item, itemIndex) => (
          <div className={styles.house_card} key={itemIndex}>
            <div className={styles.card_info}>
              <Image
                src={item.images.img}
                alt={'Picture of the House'}
                width={'249'}
                height={'150'}
              />
              <div className={styles.location_house}>
                <h5>
                  {item.feature.region}, {item.feature.city}
                </h5>
                <p>{item.address}</p>

                <TextIcon
                  Icon={<DateMonthIcon />}
                  title={
                    item.price.monthlyPrice
                      ? 'Monthly Price was'
                      : 'Daily Price was'
                  }
                  text={`${item.price.monthlyPrice || item.price.dailyPrice} $`}
                  newStyle={styles.house_price}
                />

                <div className={styles.rental_period}>
                  <div className={styles.rental_date}>
                    <CalenderIcon />
                    <p>{item.rentalPeriod.startDate}</p>
                  </div>
                  <p>to</p>
                  <div className={styles.rental_date}>
                    <CalenderIcon />
                    <p>{item.rentalPeriod.endDate}</p>
                  </div>
                </div>
                {/* rental period */}
                <div
                  className={styles.more_info}
                  onClick={() => handleShowMore(itemIndex)}
                >
                  {!isShow[itemIndex] ? (
                    <>
                      <p>See more details</p>
                      <MoreInfoIcon />
                    </>
                  ) : (
                    <>
                      <p>See less details</p>
                      <LessInfoIcon />
                    </>
                  )}
                </div>
              </div>
            </div>

            {isShow[itemIndex] ? (
              <>
                <div className={styles.house_rating}>
                  <p>YOUR Rating: </p>
                  <Rating count={5} value={item.rating} />
                </div>
                <MoreInfo
                  bedrooms={item.feature.bedroom}
                  bathrooms={item.feature.bathroom}
                  parking={item.feature.parking}
                  area={item.feature.meterage}
                  description={item.description}
                  comment={item.comment}
                />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
