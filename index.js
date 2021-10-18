var cron = require("node-cron");
const { exec } = require("child_process");

cron.schedule("15 0 18 * * 1", () => {
  console.log("starting script");
  exec("sh scriptfile.sh", (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  console.log("script finished");
},{timezone: "Europe/Stockholm"});

