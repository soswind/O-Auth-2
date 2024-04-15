import { GitHubStrategy } from "remix-auth-github";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";

let gitHubStrategy = new GitHubStrategy(
  {
    clientID: "ed298f3d40e4bebf74c8",
    clientSecret: "6316ff18565b81688b04f59fd5d464fd2d7b70dc",
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  async ({ accessToken, extraParams, profile }) => {
    // Save/Get the user data from your DB or API using the tokens and profile
    return profile;
  }
);

export let authenticator = new Authenticator(sessionStorage);
authenticator.use(gitHubStrategy);
