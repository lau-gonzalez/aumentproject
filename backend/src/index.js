require("dotenv").config();

const app = require("./app");
require("./database");

const PORT = app.get("port");

const main = async () => {
  await app.listen(PORT);
  console.log("server up");
};

main();
