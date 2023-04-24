import {
  ChooseDropdown,
  TextIcon,
  DateMonthIcon,
  MoreInfoIcon,
} from '@rentling/fr-shared';
import styles from './RentalHistory.module.scss';
import { users } from '../../components/data';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const RentalHistory = () => {
  const [sortUser, setSortUser] = useState(users);
  const [sortSelected, setSortSelected] = useState('Earliest');

  useEffect(() => {
    const sortedUser = users.map((user) => {
      const sortedHistoryByEarliest = user.history.slice().sort((a, b) => {
        return Date.parse(a.rentalPeriod.startDate) - Date.parse(b.rentalPeriod.startDate);
      });
      const sortedHistoryByLatest = user.history.slice().sort((a, b) => {
        return Date.parse(b.rentalPeriod.startDate) - Date.parse(a.rentalPeriod.startDate);
      });
      if (sortSelected === 'Earliest') {
        return { ...user, history: sortedHistoryByEarliest };
      } else {
        return { ...user, history: sortedHistoryByLatest };
      }
    });
    setSortUser(sortedUser);
  }, [sortSelected]);

  
  const handleSort = (sortOption: string) => {
    setSortSelected(sortOption);
  };
  
  return (
    <div className={styles.container}>
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
      <div className={styles.houses}>
        {sortUser.map((user) => (
          <div className={styles.houses_card}>
            {user.history.map((item) => (
              <div className={styles.house_card}>
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
                  {/* <div> */}
                  <TextIcon
                    Icon={<DateMonthIcon />}
                    title={'Monthly Price was'}
                    text={`${item.price.monthlyPrice} $`}
                    newStyle={styles.house_price}
                  />
                  {/* </div> */}
                  <div className={styles.rental_period}>
                    <div className={styles.rental_date}>
                      <DateMonthIcon />
                      <p>{item.rentalPeriod.startDate}</p>
                    </div>
                    <p>to</p>
                    <div className={styles.rental_date}>
                      <DateMonthIcon />
                      <p>{item.rentalPeriod.endDate}</p>
                    </div>
                  </div>
                  {/* rental period */}
                  <div className={styles.more_info}>
                    <p>See more details</p>
                    <MoreInfoIcon />
                  </div>
                </div>
                {/* location house*/}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
