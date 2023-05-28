import { rest } from 'msw';
import { Book, Review } from './types';
import { MOCK_API_URL } from '../constants/apis';
import { availableUsers } from './data/users';
import { houses } from './data/houses';
import { users } from './data/data ';

export const handlers = [
  rest.post(`${MOCK_API_URL}/auth/sign-in`, (req, res, ctx) => {
    const { username, password } = req.body as any;

    const foundUser = availableUsers.find(
      (u) => u.username === username && u.password === password
    );

    return foundUser
      ? res(
          ctx.status(200),
          ctx.json({
            ...foundUser,
          })
        )
      : res(ctx.status(401), ctx.json({}));
  }),

  rest.get(`${MOCK_API_URL}/houses`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(houses));
  }),

  rest.get(`${MOCK_API_URL}/houses/:houseId`, (req, res, ctx) => {
    const { houseId } = req.params;

    const foundHouse = houses.find((house) => house.id === houseId);
    return foundHouse
      ? res(ctx.status(200), ctx.json(foundHouse))
      : res(ctx.status(200), ctx.json([]));
  }),
  rest.get(`${MOCK_API_URL}/:userId/favorites`, (req, res, ctx) => {
    const { userId } = req.params;

    const favoritesForUser = users.find(
      (u) => u.profile.id === userId
    )?.favoritesList;

    return favoritesForUser
      ? res(ctx.status(200), ctx.json(favoritesForUser))
      : res(ctx.status(200), ctx.json([]));
  }),

  rest.get(`${MOCK_API_URL}/:userId/rental-history`, (req, res, ctx) => {
    const { userId } = req.params;

    const rentalHistoryForUser = users.find(
      (u) => u.profile.id === userId
    )?.history;

    return rentalHistoryForUser
      ? res(ctx.status(200), ctx.json(rentalHistoryForUser))
      : res(ctx.status(200), ctx.json([]));
  }),

  rest.get(`${MOCK_API_URL}/:userId/current-rental`, (req, res, ctx) => {
    const { userId } = req.params;

    const currentRentalForUser = users.find(
      (u) => u.profile.id === userId
    )?.currentHouse;

    return currentRentalForUser
      ? res(ctx.status(200), ctx.json(currentRentalForUser))
      : res(ctx.status(200), ctx.json([]));
  }),
];
