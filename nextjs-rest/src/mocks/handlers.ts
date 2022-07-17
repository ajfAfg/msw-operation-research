import { rest } from "msw";

export const handlers = [
  rest.get("https://yesno.wtf/api", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ foo: "bar" }));
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
