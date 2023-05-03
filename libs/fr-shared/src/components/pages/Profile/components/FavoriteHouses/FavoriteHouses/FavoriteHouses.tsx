// import { DropDownIcon } from 'libs/fr-shared/src/components/elements/Icons/DropDownIcon';
// import styles from './FavoriteHouses.module.scss';
// import Image from 'next/image';
// import { CalenderIcon } from 'libs/fr-shared/src/components/elements/Icons/CalenderIcon';
// import { ShareIcon } from 'libs/fr-shared/src/components/elements/Icons/ShareIcon';
// import { LikeIcon } from 'libs/fr-shared/src/components/elements/Icons/LikeIcon';
// import { ChooseDropdown } from 'libs/fr-shared/src/components/elements/Dropdown/DropdownMenu';
// import { useState, useMemo } from 'react';
// import { houses, users } from '@rentling/fr-shared';

// interface PropsFavoriteHouses {
//   image: any;
//   regins: any;
//   title: any;
//   onDay: any;
//   thirtyDay: any;
// }

// export const FavoriteHouses = ({
//   image,
//   regins,
//   title,
//   onDay,
//   thirtyDay,
// }: PropsFavoriteHouses) => {
//   const [dailySelected, setDailySelected] = useState<boolean>(true);
//   const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
//     min: 0,
//     max: 10000,
//   });
//   const [sortSelected, setSortSelected] = useState<string>('cheaper');

//   const filteredHouses = useMemo(() => {
//     return houses.filter((house) => {
//       const isPriceMatched = dailySelected
//         ? house.price.oneDay >= priceRange.min &&
//           house.price.oneDay <= priceRange.max
//         : house.price.thirtyDay >= priceRange.min &&
//           house.price.thirtyDay <= priceRange.max;
//     });
//   }, [priceRange, houses]);

//   const handleSortChange = (sortOption: any) => {
//     setSortSelected(sortOption);

//     return filteredHouses.sort(
//       (
//         a: { price: { oneDay: any; thirtyDay: any } },
//         b: { price: { oneDay: any; thirtyDay: any } }
//       ) => {
//         const priceCheap = dailySelected
//           ? Number(a.price.oneDay)
//           : Number(a.price.thirtyDay);
//         const priceExpensive = dailySelected
//           ? Number(b.price.oneDay)
//           : Number(b.price.thirtyDay);
//         if (sortSelected === 'cheaper') {
//           return priceExpensive - priceCheap;
//         } else {
//           return priceCheap - priceExpensive;
//         }
//       }
//     );
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.header_container}>
//           <div className={styles.header_favorite_houses}>
//             <p>your favorite houses</p>
//           </div>
//         </div>
//         <div className={styles.sort_option}>
//           <p>sortby:</p>
//           <ChooseDropdown
//             label={sortSelected}
//             selectedOption={sortSelected}
//             options={['cheaper', 'expensive']}
//             style={undefined}
//             handleOptionChange={handleSortChange}
//           />
//         </div>
//         <div className={styles.houses_container}>
//           <div className={styles.container_image}>
//             <Image src={image} alt="/" fill object-fit="cover" />
//           </div>
//           <div className={styles.detailes_container}>
//             <div className={styles.region_container}>
//               <p>{regins}</p>
//             </div>
//             <div className={styles.title}>
//               <p>{title}</p>
//             </div>
//             <div className={styles.calender_container}>
//               <div className={styles.calendar}>
//                 <CalenderIcon />
//                 <span>{onDay}</span>
//                 <p>$/day</p>
//               </div>
//               <div className={styles.calendar}>
//                 <CalenderIcon />
//                 <span>{thirtyDay}</span>
//                 <p>$/mo</p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.reaction}>
//             <div className={styles.share_icon}>
//               <ShareIcon />
//             </div>
//             <div className={styles.like_icon}>
//               <LikeIcon />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


import { useState } from 'react';
import { users } from '@rentling/fr-shared';
import { ChooseDropdown } from 'libs/fr-shared/src/components/elements/Dropdown/DropdownMenu';
import { DropDownIcon } from 'libs/fr-shared/src/components/elements/Icons/DropDownIcon';
import { CalenderIcon } from 'libs/fr-shared/src/components/elements/Icons/CalenderIcon';
import { ShareIcon } from 'libs/fr-shared/src/components/elements/Icons/ShareIcon';
import { LikeIcon } from 'libs/fr-shared/src/components/elements/Icons/LikeIcon';
import styles from './FavoriteHouses.module.scss';
import Image from 'next/image';

interface PropsFavoriteHouses {
  image: any;
  regins: any;
  title: any;
  onDay: any;
  thirtyDay: any;
}

function sortFavoritesListByPrice(user:any, priceType:any) {
  const sortedFavoritesList = user.favoritesList
    .slice()
    .sort((a:any, b:any) => a.price[priceType] - b.price[priceType]);
  return {
    ...user,
    favoritesList: sortedFavoritesList,
  };
}

export const FavoriteHouses = () => {
  const [dailySelected, setDailySelected] = useState<boolean>(true);
  // const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
  //   min: 0,
  //   max: 10000,
  // });
  const [sortSelected, setSortSelected] = useState<string>('cheaper');
  const [favoritesList, setFavoritesList] = useState(users[0].favoritesList);

  const handleSortChange = (sortOption: string) => {
    setSortSelected(sortOption);
  
    const priceType = dailySelected ? 'oneDay' : 'thirtyDay';
    const sortedFavoritesList = favoritesList.slice().sort((a: any, b: any) => {
      if (sortOption === 'cheaper') {
        return a.price[priceType] - b.price[priceType];
      } else {
        return b.price[priceType] - a.price[priceType];
      }
    });
    setFavoritesList(sortedFavoritesList);
  };

  const houseItems = favoritesList.map((house: any) => (
    <div className={styles.houses_container}>
      <div className={styles.container_image}>
        <Image src={house.images.img} alt="/" fill object-fit="cover" />
      </div>
      <div className={styles.detailes_container}>
        <div className={styles.region_container}>
          <p>{house.feature.region}</p>
        </div>
        <div className={styles.title}>
          <p>{house.title}</p>
        </div>
        <div className={styles.calender_container}>
          <div className={styles.calendar}>
            <CalenderIcon />
            <span>{house.price.oneDay}</span>
            <p>$/day</p>
          </div>
          <div className={styles.calendar}>
            <CalenderIcon />
            <span>{house.price.thirtyDay}</span>
            <p>$/mo</p>
          </div>
        </div>
      </div>
      <div className={styles.reaction}>
        <div className={styles.share_icon}>
          <ShareIcon />
        </div>
        <div className={styles.like_icon}>
          <LikeIcon />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <div className={styles.header_favorite_houses}>
            <p>your favorite houses</p>
          </div>
        </div>
        <div className={styles.sort_option}>
          <p>sortby:</p>
          <ChooseDropdown
            label={sortSelected}
            selectedOption={sortSelected}
            options={['cheaper', 'expensive']}
            style={undefined}
            handleOptionChange={handleSortChange}
          />
        </div>
      {houseItems}
      </div>
    </>
  );
};
