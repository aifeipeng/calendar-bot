var cron = require("node-cron");
const { exec } = require("child_process");

cron.schedule("1 17 * * 1", () => {
  console.log("starting script");
  exec("sh scriptfile.sh", (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  console.log("script finished");
});
