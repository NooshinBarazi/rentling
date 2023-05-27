import {
  CurrentRental,
  EmptyCurrentRental,
  ProfileTemplate,
  wrapper,
} from '@rentling/fr-shared';
import { GetServerSideProps } from 'next';
import cookie from 'cookie';
import { fetchCurrentRental } from 'libs/fr-shared/src/store/features/currentRentalSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export default function CurrentRentalPage({currentRentals}) {

  if (currentRentals.length === 0) {
    return <EmptyCurrentRental />;
  }

  const moreInfoProps = {
    bedrooms: currentRentals.feature.bedroom,
    bathrooms: currentRentals.feature.bathroom,
    parking: currentRentals.feature.parking,
    area: currentRentals.feature.area,
    description: currentRentals.description,
    comment: currentRentals.comment,
  };

  return (
    <CurrentRental
      title={currentRentals.title}
      img={currentRentals.images.img}
      region={currentRentals.feature.region}
      city={currentRentals.feature.city}
      address={currentRentals.address}
      price={currentRentals.price.thirtyDay}
      duration={currentRentals.duration}
      startDate={currentRentals.rentalPeriod.startDate}
      endDate={currentRentals.rentalPeriod.endDate}
      rental={moreInfoProps}
    />
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const cookies = context.req.headers.cookie;
      const parsedCookies = cookie.parse(cookies);
      const userId = JSON.parse(parsedCookies.availableUser).userId as number;

      const actionResult = await store.dispatch(fetchCurrentRental(userId))
      const currentRentals = unwrapResult(actionResult)

      return {
        props: {
          currentRentals
        }
      }
    }
)

CurrentRentalPage.PageLayout = ProfileTemplate;
