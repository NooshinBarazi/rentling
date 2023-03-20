import styles from './FilteredCards.module.scss';
import { ChooseDropdown, HouseCard } from '@rentling/fr-shared';

interface CardsProps {
  filteredHouses: any[];
  handleSortChange: any;
  sortSelected: any;
}

export const FilteredCards = ({
  filteredHouses,
  handleSortChange,
  sortSelected,
}: CardsProps) => {
  return (
    <section className={styles.result}>
      <div className={styles.sort_option}>
        <p>sort by:</p>
        <ChooseDropdown
          className={styles.name}
          selectedOption={sortSelected}
          style={undefined}
          label={sortSelected}
          options={['cheaper', 'expensive']}
          handleOptionChange={handleSortChange}
        />
      </div>
      <div className={styles.cards}>
        {filteredHouses.map((house: any) => (
          <HouseCard
            image={house.images.img}
            title={house.title}
            address={house.address}
            bathrooms={house.feature.bathroom}
            bedrooms={house.feature.bedroom}
            parking={house.feature.parking}
            area={house.feature.meterage}
            url={undefined}
            thirtyDay={house.price.thirtyDay}
            oneDay={house.price.oneDay}
          />
        ))}
      </div>
    </section>
  );
};
