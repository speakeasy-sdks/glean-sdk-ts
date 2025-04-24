import { Glean } from "glean";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
  domain: "customerName",
});

async function run() {
  await glean.chat.deletechats({
    deleteChatsRequest: {
      ids: [
        "<value>",
        "<value>",
      ],
    },
  });


}

run();