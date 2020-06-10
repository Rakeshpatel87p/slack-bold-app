module.exports = {
  startChallengeBlock: [
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "Yes",
          },
          style: "primary",
          value: "start-challenge",
          action_id: "start-challenge",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "No",
          },
          style: "danger",
          value: "deny-challenge",
          action_id: "deny-challenge",
        },
      ],
    },
  ],
};
