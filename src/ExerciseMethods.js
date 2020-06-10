class ExerciseMethods {
  constructor() {
    console.log("Hello Houston, we have liftoff");
  }

  sendMessaage() {
    app.client.chat.postMessage({
      channel,
      token,
      text,
    });
  }
}
