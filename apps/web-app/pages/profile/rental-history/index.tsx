import { ProfileTemplate, RentalHistory, wrapper } from '@rentling/fr-shared';
import { GetServerSideProps } from 'next';
import cookie from 'cookie';
import { fetchRentalHistory } from 'libs/fr-shared/src/store/features/rentalsHistorySlice';
import { unwrapResult } from '@reduxjs/toolkit';

export default function RentalHistoryPage({rentalHistory}) {
  return <RentalHistory rentalHistory={rentalHistory} />;
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const cookies = context.req.headers.cookie;
      const parsedCookies = cookie.parse(cookies);
      const userId = JSON.parse(parsedCookies.availableUser).userId as number;

      const actionResult = await store.dispatch(fetchRentalHistory(userId))
      const rentalHistory = unwrapResult(actionResult)

      return {
        props: {
          rentalHistory
        }
      }
    }
)

RentalHistoryPage.PageLayout = ProfileTemplate;
