import { GetServerSideProps } from 'next';
import { fetchFavoriteHouses } from 'libs/fr-shared/src/store/features/favoriteHousesSlice';
import {
  EmptyPageFavoriteHouses,
  FavoriteHouses,
  ProfileTemplate,
  wrapper,
} from '@rentling/fr-shared';
import { unwrapResult } from '@reduxjs/toolkit';


export default function FindFavoriteHouses({ favoriteHouses }) {

  if ((favoriteHouses.length === 0)) {
    return <EmptyPageFavoriteHouses />;
  }
  return <FavoriteHouses favoriteHouses={favoriteHouses} />;
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {

      const actionResult = await store.dispatch(fetchFavoriteHouses())
      const favoriteHouses = unwrapResult(actionResult)
      
      return {
        props: {
          favoriteHouses
        }
      }
    }
)

FindFavoriteHouses.PageLayout = ProfileTemplate;

