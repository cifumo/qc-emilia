global.botToken = "6187457009:AAEwT3PNOd7tIKk7A9d2Rje0p4H00JuESz0"
require('./app')

process.on("unhandledRejection", (reason) => {
  console.error("\x1b[31m%s\x1b[0m", `Unhandled promise rejection: ${reason}`);
});

process.on("uncaughtException", function (err) {
  console.error(err);
});
