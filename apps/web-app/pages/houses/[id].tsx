import React from 'react';
import { HousePage, wrapper } from '@rentling/fr-shared';
import { GetServerSideProps } from 'next';
import { unwrapResult } from '@reduxjs/toolkit';
import {fetchSingleHouse } from 'libs/fr-shared/src/store/features/singleHouseSlice';

export default function HousePaymentPage({singleHouse}) {

  if (!singleHouse) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <h1>House profile not found!</h1>;
      </div>
    );
  } else {
    return (
      <div>
        <HousePage
          title={singleHouse.title}
          address={singleHouse.address}
          bathrooms={singleHouse.feature.bathroom}
          parking={singleHouse.feature.parking as boolean}
          area={singleHouse.feature.meterage}
          description={singleHouse.feature.description}
          images={singleHouse.images.imagesList}
          priceDaily={singleHouse.price.oneDay}
          priceMonthly={singleHouse.price.thirtyDay}
          cityName={singleHouse.feature.city}
          bedroom={singleHouse.feature.bedroom}
        />
      </div>
    );
  }
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
    
    const actionResult = await store.dispatch(fetchSingleHouse(context.params.id as string))
    const singleHouse = unwrapResult(actionResult)

      return {
        props: {
          singleHouse
        }
      }
    }
)
