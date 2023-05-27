import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './HouseForm.module.scss';
import FormImages from 'libs/fr-shared/src/components/elements/FormImages/FormImages';
import { motion, useInView } from 'framer-motion';

import {
  regions,
  houses,
  FilteredCards,
  PriceSlider,
  PropertyType,
  Region,
  City,
  Rooms,
  Bathrooms,
  Button,
  PrimaryButtonIcon,
  GoToTopIcon,
} from '@rentling/fr-shared';

interface HouseFormProps {
  filteredCardsRef: any;
  housefilterref: any;
}
export const HouseForm = ({
  filteredCardsRef,
  housefilterref,
}: HouseFormProps) => {
  //filtering item's States
  const [bedCount, setBedCount] = useState<any>('all');
  const [bathroomCount, setBathroomCount] = useState<string>('all');
  const [houseSelected, setHouseSelected] = useState<boolean>(true);
  const [apartmentSelected, setApartmentSelected] = useState<boolean>(true);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [applyFilter, setApplyFilter] = useState<boolean>(false);
  const [dailySelected, setDailySelected] = useState<boolean>(true);
  const [monthlySelected, setMonthlySelected] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 10000,
  });
  const [sortSelected, setSortSelected] = useState<string>('cheaper');


  // Region change function
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    selectedRegion === region ? null : setSelectedCity(''); // Clears the selected city when the region changes
  };

  // city change function
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  //Bedroom change function
  const handleBedChange = (count: string) => {
    setBedCount(count);
  };

  //Bathroom change function
  const handleBathChange = (count: string) => {
    setBathroomCount(count);
  };

  //Time change function
  const handlePriceTime = (e: { target: { name: any; checked: any } }) => {
    const { name, checked } = e.target;

    if (name === 'daily') {
      setDailySelected(checked);
      if (checked) {
        setMonthlySelected(false);
      } else {
        setMonthlySelected(true);
      }
    }
    if (name === 'monthly') {
      setMonthlySelected(checked);
      if (checked) {
        setDailySelected(false);
      } else {
        setDailySelected(true);
      }
    }
  };

  //Property type change function
  const handleCheckboxChange = (e: { target: { name: any; checked: any } }) => {
    const { name, checked } = e.target;
    if (name === 'house') {
      setHouseSelected(checked);
    }
    if (name === 'apartment') {
      setApartmentSelected(checked);
    }
    if (!houseSelected) {
      setApartmentSelected(true);
    }
    if (!apartmentSelected) {
      setHouseSelected(true);
    }
  };

  // store filtered houses after button clicked

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
  //resets states to default on change
  useEffect(() => {
    setApplyFilter(false);
  }, [
    bedCount,
    bathroomCount,
    houseSelected,
    apartmentSelected,
    selectedRegion,
    selectedCity,
    priceRange,
  ]);

  const go_to_top = useRef(null);

  const isInView = useInView(go_to_top);

  //Button apply filter function
  const handleFilterClick = () => {
    setApplyFilter(true);

    if (filteredCardsRef.current !== null) {
      filteredCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [formIsSticky, setFormIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [formIsSticky]);

  const handleScroll = () => {
    const house_form_section = document.getElementById('house_form_section'); // Replace "house_form_section" with your component's ID

    if (house_form_section) {
      const rect = house_form_section.getBoundingClientRect();
      if (rect.top <= -40) {
        setFormIsSticky(true);
      } else {
        setFormIsSticky(false);
      }
    }
  };
  return (
    <div
      ref={housefilterref}
      id="house_form_section"
      className={styles.house_form_section}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className={formIsSticky ? styles.form_scrolled : styles.form}
      >
        {/* region and city */}
        <Region
          handleRegionChange={handleRegionChange}
          regions={regions}
          selectedRegion={selectedRegion}
        />
        <City
          handleCityChange={handleCityChange}
          regions={regions}
          selectedCity={selectedCity}
          selectedRegion={selectedRegion}
        />

        {/* Property Type */}
        <PropertyType
          houseSelected={houseSelected}
          apartmentSelected={apartmentSelected}
          handleCheckboxChange={handleCheckboxChange}
        />

        {/* Rooms and Bathrooms */}
        <Rooms bedCount={bedCount} handleBedChange={handleBedChange} />
        <Bathrooms
          bathroomCount={bathroomCount}
          handleBathChange={handleBathChange}
        />

        {/* Price and date */}
        <PriceSlider
          step={monthlySelected ? 500 : 50}
          daily={dailySelected}
          monthly={monthlySelected}
          handlePriceTime={handlePriceTime}
          min={0}
          max={20000}
          onChange={setPriceRange}
        />
        <Button
          newStyle={styles.button}
          text="Search Property"
          Icon={<PrimaryButtonIcon />}
          onClick={handleFilterClick}
        />
      </form>
      <div className={styles.form_images}>
        <FormImages
          monthlySelected={monthlySelected}
          dailySelected={dailySelected}
          apartmentSelected={apartmentSelected}
          houseSelected={houseSelected}
          selectedRegion={selectedRegion}
        />
      </div>
      <motion.div
        className={styles.go_to_top}
        ref={go_to_top}
        initial={{
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
              }
            : '' // Added closing bracket here
        }
      >
        <GoToTopIcon
          onClick={() => {
            if (filteredCardsRef.current) {
              filteredCardsRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </motion.div>
      <div
        className={
          formIsSticky ? styles.filtered_result_swiped : styles.filtered_result
        }
      >
        <p>Result</p>
      </div>
      <div className={styles.filtered_cards} ref={filteredCardsRef}>
        <FilteredCards
          selectedRegion={selectedRegion}
          sortSelected={sortSelected}
          handleSortChange={handleSortChange}
          filteredHouses={filteredHouses}
        />
      </div>
    </div>
  );
};
