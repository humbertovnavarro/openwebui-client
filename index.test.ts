import { Client } from "./index";

test("smoke test", () => {
  const testClient = new Client({
    host: "http://localhost:8080",
    token: "!",
  });
});
