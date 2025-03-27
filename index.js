global.botToken = "7621418149:AAEHApTpHLuug5cfHIDOz9Dbz_1OhWopptA"
require('./app')

process.on("unhandledRejection", (reason) => {
  console.error("\x1b[31m%s\x1b[0m", `Unhandled promise rejection: ${reason}`);
});

process.on("uncaughtException", function (err) {
  console.error(err);
});
