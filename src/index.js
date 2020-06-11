const { App, LogLevel } = require("@slack/bolt");
const { startChallengeBlock } = require("./content/startChallengeBlock");
const dotenv = require("dotenv").config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
  endpoints: {
    events: "/slack/events",
    actions: "/slack/interactive-endpoint",
  },
});

(async () => {
  // Start your app
  await app.start(3000);

  console.log("⚡️ Bolt app is running!");
})();

// Listens to incoming messages that contain "hello"
app.message("workout", async ({ message, say, context }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>! We need to chat`);
  exerciseIntroPrompt(message, context);
});

app.action("start-challenge", async ({ ack, say, payload }) => {
  try {
    console.log("action received");
    console.log(payload);
    // Acknowledge action request
    await ack();
    await say("Lets get ready to get pumped then!! Give me 20 push-ups 💪🏽");
  } catch (err) {
    console.log(err);
  }
});

function exerciseIntroPrompt(message, context) {
  app.client.chat.postMessage({
    channel: message.user,
    token: context.botToken,
    text:
      "Great first step!! Do you want to take part in the push-up challenge?",
    blocks: startChallengeBlock,
  });
}

module.exports = {
  app: app,
};
