const { app } = require("./index");
const { startChallengeBlock } = require("./content/startChallengeBlock");

// Listens to incoming messages that contain "hello"
app.message("workout", async ({ message, say, context }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>! We need to chat`);
  //exerciseIntroPrompt(message, context);
});

function exerciseIntroPrompt(message, context) {
  app.client.chat.postMessage({
    channel: message.user,
    token: context.botToken,
    text:
      "Great first step!! Do you want to take part in the push-up challenge?",
    blocks: startChallengeBlock.prompt,
  });
}

//Not Working
// app.action("start-challenge", async ({ ack, say }) => {
//   console.log("action received");
//   // Acknowledge action request
//   await ack();
//   await say("Request approved 👍");
// });
