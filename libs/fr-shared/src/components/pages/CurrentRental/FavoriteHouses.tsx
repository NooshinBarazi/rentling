import React, { useState, useMemo } from 'react';
import styles from './favoriteHouses.module.scss';
import Image from 'next/image';
import homeImage from './Image/homeImage.jpg';
import { Button } from '../../elements/Button/Button';
import { PrimaryButtonIcon } from '../../elements/Icons/PrimaryButtonIcon';
import { ChooseDropdown, houses } from '@rentling/fr-shared';

export const FavoriteHouses = () => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [bedCount, setBedCount] = useState<any>('all');
  const [bathroomCount, setBathroomCount] = useState<string>('all');
  const [houseSelected, setHouseSelected] = useState<boolean>(true);
  const [apartmentSelected, setApartmentSelected] = useState<boolean>(true);
  const [dailySelected, setDailySelected] = useState<boolean>(true);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 10000,
  });
  const [sortSelected, setSortSelected] = useState<string>('cheaper');

  const toggleSelecteOption = ({}) => {
    setSelectedOption(!selectedOption);
  };

  const handleOptionChange = (event: any) => {
    event.preventDefault();
  };
  const FindYourHouse = () => {};

  //sorting metod

  const filteredHouses = useMemo(() => {
    if (
      bedCount === 'all' &&
      bathroomCount === 'all' &&
      houseSelected &&
      apartmentSelected &&
      selectedRegion === '' &&
      selectedCity === '' &&
      priceRange
    ) {
      return houses; // No filtering by bed or bathroom count or property type
    }
    return houses.filter((house) => {
      const isPriceMatched = dailySelected
        ? house.price.oneDay >= priceRange.min &&
          house.price.oneDay <= priceRange.max
        : house.price.thirtyDay >= priceRange.min &&
          house.price.thirtyDay <= priceRange.max;

      const isRegionMatched =
        selectedRegion === '' || house.feature.region === selectedRegion;
      const isCityMatched =
        selectedCity === '' || house.feature.city === selectedCity;
      const isBedMatched =
        bedCount === 'all' || house.feature.bedroom === parseInt(bedCount);
      const isBathroomMatched =
        bathroomCount === 'all' ||
        house.feature.bathroom === parseInt(bathroomCount);
      const isPropertyTypeMatched =
        (!houseSelected && !apartmentSelected) ||
        (houseSelected && house.feature.type === 'house') ||
        (apartmentSelected && house.feature.type === 'apartment');

      return (
        isBedMatched &&
        isBathroomMatched &&
        isPropertyTypeMatched &&
        isRegionMatched &&
        isCityMatched &&
        isPriceMatched
      );
    });
  }, [
    bedCount,
    bathroomCount,
    houseSelected,
    apartmentSelected,
    selectedRegion,
    selectedCity,
    priceRange,
    dailySelected,
    houses,
  ]);

  // sorting by price function
  const handleSortChange = (sortOption: any) => {
    setSortSelected(sortOption);

    return filteredHouses.sort(
      (
        a: { price: { oneDay: any; thirtyDay: any } },
        b: { price: { oneDay: any; thirtyDay: any } }
      ) => {
        const priceCheap = dailySelected
          ? Number(a.price.oneDay)
          : Number(a.price.thirtyDay);
        const priceExpensive = dailySelected
          ? Number(b.price.oneDay)
          : Number(b.price.thirtyDay);
        if (sortSelected === 'cheaper') {
          return priceExpensive - priceCheap;
        } else {
          return priceCheap - priceExpensive;
        }
      }
    );
  };

  return (
    <>
      <div className={styles.container_favorite_houses}>
        <div className={styles.header_container}>
          <div className={styles.header_favorite_houses}>
            <p>your favorite houses</p>
          </div>
        </div>

        <div className={styles.not_home_container}>
          <div className={styles.text_container}>
            <p>
              There are no favorite houses yet. let's explore to find ones that
              fit for you!
            </p>
          </div>
          <div className={styles.image_container}>
            <Image src={homeImage} alt="/" fill object-fit="cover" />
          </div>
          <div className={styles.reserve_button}>
            <Button
              Icon={<PrimaryButtonIcon />}
              text="Find your house"
              newStyle=""
              onClick={() => FindYourHouse()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
