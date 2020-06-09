const { App } = require("@slack/bolt");
const dotenv = require("dotenv").config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Listens to incoming messages that contain "hello"
app.message("hello", async ({ message, say, context }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
  await app.client.chat.postMessage({
    channel: message.user,
    token: context.botToken,
    text: "Hey man, I can help out with that. Shall I proceed?",
  });
});

app.message("workout", async ({ message, say }) => {
  console.log(message);
  //await say("Did somebody mention exercise?");
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
