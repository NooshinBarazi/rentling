import React, { useEffect, useState } from 'react';
import styles from './RegionCity.module.scss';
import { motion } from 'framer-motion';
import { MapIcon } from 'libs/fr-shared/src/components/elements/Icons/MapIcon';
import { LocationIcon } from 'libs/fr-shared/src/components/elements/Icons/LocationIcon';
import { ChooseDropdown } from 'libs/fr-shared/src/components/elements/Dropdown/DropdownMenu';

export const Region = ({
  selectedRegion,
  handleRegionChange,
  regions,
}: any) => {
  return (
    <div className={styles.icon_dropdown}>
      <MapIcon />
      <ChooseDropdown
        className={undefined}
        style={{ marginLeft: '2rem' }}
        label="Choose your region"
        selectedOption={selectedRegion}
        options={regions.map((region: { name: any }) => region.name)}
        handleOptionChange={handleRegionChange}
      />
    </div>
  );
};

export const City = ({
  selectedCity,
  selectedRegion,
  handleCityChange,
  regions,
}: any) => {
  return (
    <div className={styles.icon_dropdown}>
      <LocationIcon />
      <ChooseDropdown
        className={styles.dropdown}
        style={
          selectedRegion
            ? { marginLeft: '2rem', opacity: '1' }
            : { marginLeft: '2rem', opacity: '0.5' }
        }
        label={
          selectedRegion ? 'Choose your city' : 'First choose your region '
        }
        selectedOption={selectedCity}
        options={
          regions.find(
            (region: { name: any }) => region.name === selectedRegion
          )?.cities || []
        }
        handleOptionChange={handleCityChange}
      />
    </div>
  );
};
