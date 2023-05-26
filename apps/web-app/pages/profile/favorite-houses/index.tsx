import { GetServerSideProps } from 'next';
import { fetchFavorite } from 'libs/fr-shared/src/store/features/favoriteSlice';
import {
  EmptyPageFavoriteHouses,
  FavoriteHouses,
  ProfileTemplate,
  RootState,
  wrapper,
  useAuth
} from '@rentling/fr-shared';
import { useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (ctx) => {

      const actionResult = await store.dispatch(fetchFavorite())
      const favoriteHouses = unwrapResult(actionResult)
      return {
        props: {
          favoriteHouses
        }
      }
    }
)

export default function FindFavoriteHouses({ favoriteHouses }) {

  if ((favoriteHouses.length === 0)) {
    return <EmptyPageFavoriteHouses />;
  }
  return <FavoriteHouses favoriteHouses={favoriteHouses} />;
}

FindFavoriteHouses.PageLayout = ProfileTemplate;

