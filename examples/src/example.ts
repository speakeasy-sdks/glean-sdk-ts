import { config } from "dotenv";
config();
import { Glean } from "glean";
import { GleanError, GleanDataError } from "glean/models/errors";

if (!process.env["SERVER_URL"]) {
  throw new Error("SERVER_URL is not set");
}

console.log(process.env["SERVER_URL"]);

const glean = new Glean({
  domain: "customerName",
  bearerAuth: process.env["BEARER_AUTH"],
});

try {
  const data = await glean.chat.ask({
    askRequest: {
      searchRequest: {
        query: "What is the capital of France?",
      },
    },
  });
  console.log(data);
} catch (error) {
  if (error instanceof GleanError) {
    console.error(error.message);
    console.error(error.statusCode);
    console.error(error.rawResponse);
    console.error(error.body);
  }

  // GleanDataError contains structured data
  if (error instanceof GleanDataError) {
    console.error(error.errorMessages);
    console.error(error.invalidOperators);
  }
  throw error;
}
