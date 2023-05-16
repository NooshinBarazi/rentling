import { rest } from 'msw'
import { Book, Review } from './types'
import {MOCK_API_URL} from './constants'
import { availableUsers } from './data/users';
import { houses } from './data/houses';

export const handlers = [
    rest.post(`${MOCK_API_URL}/auth/sign-in`, (req, res, ctx) => {

        const {username, password} = req.body as any;
    
        const foundUser = availableUsers.find(u => u.username === username && u.password === password)

        return foundUser ? res(
            ctx.status(200),
            ctx.json({
                ...foundUser
            })
        ) : res(ctx.status(401), ctx.json({}))
    }),

    rest.get(`${MOCK_API_URL}/houses`, (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(houses)
        )
    }),
]