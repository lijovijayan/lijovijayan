const ghpages = require("gh-pages");
const appPath = "../portfolio/build/";
ghpages.publish(appPath, function (err) {
  console.log(err);
});
