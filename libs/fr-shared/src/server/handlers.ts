import { rest } from 'msw'
import { Book, Review } from './types'

export const handlers = [
    rest.post('http://localhost:8080/auth/sign-in', (req, res, ctx) => {

        const availableUsers = [
            {
                id: 1,
                username: "nader_b",
                password: "000000",
                email: "nader_b@rentling.co"
            },
            {
                id: 2,
                username: "mehran_b",
                password: "111111",
                email: "mehran_b@rentling.co"
            },
            {
                id: 3,
                username: "nooshin_b",
                password: "222222",
                email: "nooshin_b@rentling.co"
            },
            {
                id: 4,
                username: "raana_w",
                password: "333333",
                email: "raana_w@rentling.co"
            }
        ]

        const foundUser = availableUsers.find(u => u.username === (req.body?.name as any) && u.password === req.body?.password)

        return foundUser ? res(
            ctx.status(200),
            ctx.json({
                ...foundUser
            })
        ) : res(ctx.status(401), ctx.json({}))
    }),
    rest.get('/reviews', (_req, res, ctx) => {
        return res(
            ctx.json<Review[]>([
                {
                    id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
                    author: 'John Maverick',
                    text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
                },
            ])
        )
    }),
]