import { rest } from "msw";

export const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(["cat", "dog"]));
  }),

  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "foo",
      })
    );
  }),
];
