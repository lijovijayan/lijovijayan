const ghpages = require("gh-pages");
var fs = require("fs");

const appPath = "../portfolio/build/";
const domain = "lijovijayan.dev";

fs.writeFile(`${appPath}CNAME`, domain, function (err) {
  console.log(err);
});
ghpages.publish(appPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`application is published at https://${domain}`);
  }
});
