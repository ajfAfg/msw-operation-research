import { graphql } from "msw";

export const handlers = [
  // Handles a "GetUserInfo" query
  graphql.query("GetUserInfo", (req, res, ctx) => {
    // When authenticated, respond with a query payload
    return res(
      ctx.data({
        user: {
          username: "foo",
          firstName: "John",
        },
      })
    );
  }),
];
