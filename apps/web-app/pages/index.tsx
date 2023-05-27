import { Landing, wrapper } from '@rentling/fr-shared';
import { GetServerSideProps } from 'next';
import { fetchHouses } from 'libs/fr-shared/src/store/features/housesSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export default function Index({ houses }) {
  return <Landing houses={houses} />;
}


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {

      const actionResult = await store.dispatch(fetchHouses())
      const houses = unwrapResult(actionResult)

      return {
        props: {
          houses
        }
      }
    }
)