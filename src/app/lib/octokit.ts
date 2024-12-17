import { App } from "octokit";

const githubClient = new App({
  appId: process.env.APP_ID as string,
  privateKey: process.env.PRIVATE_KEY_PATH as string,
  webhooks: {
    secret: process.env.WEBHOOK_SECRET as string
  }
});


export default githubClient;
